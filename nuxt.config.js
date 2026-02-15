export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title:
        'EM Ortakių Valymas ⋆ Gartraukių, ventiliatorių, kaminų, šachtų valymas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dulkių ir dervų. Gyvenamųjų namų ventiliacijos kanalų (šachtų) valymas.'
        },
        {
          property: 'og:title',
          content:
            'EM Ortakių Valymas ⋆ Gartraukių, ventiliatorių, kaminų, šachtų valymas'
        },
        {
          property: 'og:description',
          content:
            'Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dulkių ir dervų. Gyvenamųjų namų ventiliacijos kanalų (šachtų) valymas.'
        },
        {
          property: 'og:image',
          content: 'https://emortakiuvalymas.lt/_nuxt/img/1366eea.jpg'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap'
        }
      ],
      script: [
        {
          key: 'gtag-script',
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-635796147'
        },
        {
          key: 'gtag-config',
          type: 'text/javascript',
          children: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-635796147');
          `.trim()
        }
      ]
    }
  },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
    'nuxt-google-translate'
  ],

  googleTranslate: {
    defaultLanguage: 'lt',
    supportedLanguages: ['lt', 'en', 'de', 'pl']
  },

  site: {
    url: 'https://emortakiuvalymas.lt'
  },

  sitemap: {
    gzip: true
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'EM Ortakių Valymas',
      short_name: 'ortakiai',
      lang: 'lt',
      display: 'standalone',
      theme_color: '#ffffff',
      background_color: '#ffffff'
    }
  },

  runtimeConfig: {
    smtp: {
      host: process.env.SMTP_HOST || '',
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') !== 'false',
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
      from: process.env.SMTP_FROM || '',
      to: process.env.SMTP_TO || 'info@emortakiuvalymas.lt'
    },
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://emortakiuvalymas.lt'
    }
  }
})
