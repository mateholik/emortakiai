const GOOGLE_COOKIE = 'googtrans'
const LANG_KEY = '__em_translate_lang__'

function clearCookie (name) {
  if (!process.client) { return }
  const host = window.location.hostname
  const base = `${name}=; Max-Age=0; SameSite=Lax`
  // Try multiple variants because Google may set cookies with/without explicit domain.
  document.cookie = `${base}; Path=/`
  document.cookie = `${base}; Path=/; Domain=${host}`
  document.cookie = `${base}; Path=/; Domain=.${host}`
}

function getCookie (name) {
  if (!process.client) { return null }
  const match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[2]) : null
}

function ensureHiddenContainer () {
  if (!process.client) { return }
  if (document.getElementById('google_translate_element')) { return }
  const el = document.createElement('div')
  el.id = 'google_translate_element'
  el.style.display = 'none'
  document.body.appendChild(el)
}

function loadScriptOnce () {
  if (!process.client) { return }
  if (document.getElementById('google-translate-script')) { return }
  const script = document.createElement('script')
  script.id = 'google-translate-script'
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.head.appendChild(script)
}

function suppressGoogleUiArtifacts () {
  if (!process.client) { return }
  const banner = document.querySelector('iframe.goog-te-banner-frame')
  if (banner && banner.parentNode) { banner.parentNode.removeChild(banner) }
  const menuFrame = document.querySelector('iframe.goog-te-menu-frame')
  if (menuFrame && menuFrame.parentNode) { menuFrame.parentNode.removeChild(menuFrame) }

  // Newer GT variants inject a generic container/iframe with `.skiptranslate`.
  const injected = document.querySelectorAll('div.skiptranslate, iframe.skiptranslate, iframe[id^=":"]')
  injected.forEach((node) => {
    if (node && node.id === 'google_translate_element') { return }
    if (node && node.parentNode) { node.parentNode.removeChild(node) }
  })

  // Also remove any overlay nodes GT may use for tooltips/menus.
  const gtOverlays = document.querySelectorAll('#goog-gt-tt, .goog-te-balloon-frame')
  gtOverlays.forEach((node) => {
    if (node && node.parentNode) { node.parentNode.removeChild(node) }
  })
  // Sometimes Google injects inline `top` offsets; force reset.
  try {
    document.body.style.top = '0px'
    document.documentElement.style.marginTop = '0px'
    document.body.style.marginTop = '0px'
  } catch (e) {}
}

function startSuppressLoop () {
  if (!process.client) { return }
  const start = Date.now()
  const tick = () => {
    suppressGoogleUiArtifacts()
    if (Date.now() - start < 15000) {
      window.setTimeout(tick, 250)
    }
  }
  tick()
}

function setWindowLang (lang) {
  window[LANG_KEY] = ['lt', 'en', 'de', 'pl'].includes(lang) ? lang : 'lt'
}

function getWindowLang () {
  return window[LANG_KEY] || 'lt'
}

function getLangFromGoogleCookie () {
  const raw = getCookie(GOOGLE_COOKIE) || ''
  const match = raw.match(/\/([a-z]{2})(?:$|\/)/i)
  const lang = match ? match[1].toLowerCase() : null
  return ['lt', 'en', 'de', 'pl'].includes(lang) ? lang : null
}

function getLangFromCombo () {
  if (!process.client) { return null }
  const combo = document.querySelector('.goog-te-combo')
  if (!combo) { return null }
  const value = (combo.value || '').toLowerCase()
  return ['lt', 'en', 'de', 'pl'].includes(value) ? value : null
}

function applyLanguage (lang) {
  const safe = ['lt', 'en', 'de', 'pl'].includes(lang) ? lang : 'lt'
  setWindowLang(safe)

  // Google Translate uses `googtrans` cookie internally; we never set it, but we clear it on reset.
  if (safe === 'lt') {
    clearCookie(GOOGLE_COOKIE)
  }

  const combo = document.querySelector('.goog-te-combo')
  if (!combo) {
    // If user is trying to reset to LT before widget is ready, hard reload to show original.
    if (safe === 'lt') {
      try { window.location.reload() } catch (e) {}
    }
    return
  }

  // Default/original is usually empty value; but `lt` is also safe since pageLanguage is lt.
  combo.value = safe === 'lt' ? '' : safe
  combo.dispatchEvent(new Event('change'))

  // Some pages get “stuck” translated even after switching back; reload if GT still thinks it's active.
  if (safe === 'lt') {
    setTimeout(() => {
      const stillActive = getLangFromCombo() || getLangFromGoogleCookie()
      if (stillActive) {
        try { window.location.reload() } catch (e) {}
      }
    }, 300)
  }
}

export default function ({ app, route }, inject) {
  if (!process.client) { return }

  // Keep curated landers clean (no widget, no cookies side-effects).
  const path = (route && route.path) || ''
  const isCuratedLander = /^(\/(de|lt|en|pl))\/?$/.test(path)
  if (isCuratedLander) { return }

  const persisted = getLangFromCombo() || getLangFromGoogleCookie()
  if (persisted) { setWindowLang(persisted) }

  const api = {
    getLang () {
      return getWindowLang()
    },
    setLang (lang) {
      applyLanguage(lang)
      startSuppressLoop()
    },
    reset () {
      applyLanguage('lt')
      startSuppressLoop()
    }
  }

  inject('translate', api)

  // Always prepare widget for normal pages (hidden), so switching is instant.
  ensureHiddenContainer()
  window.googleTranslateElementInit = function () {
    try {
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'lt',
          includedLanguages: 'lt,en,de,pl',
          autoDisplay: false
        },
        'google_translate_element'
      )
    } catch (e) {
      // silent
    }
  }
  loadScriptOnce()

  // Route change => sync active language from Google cookie (if translation persists).
  if (app && app.router) {
    app.router.afterEach((to) => {
      if (/^(\/(de|lt|en|pl))\/?$/.test(to.path)) { return }
      // Google may not update `googtrans` immediately on SPA navigations; combo is the most reliable source.
      const active = getLangFromCombo() || getLangFromGoogleCookie()
      setWindowLang(active || 'lt')
    })
  }
}
