<template>
  <nav class="site-header relative">
    <div class="container">
      <div class="flex items-center justify-between h-20 md:h-32">
        <SmartLink to="/" class-name="logo block mr-16">
          <img class="w-48 md:w-auto" src="~/assets/img/logo.svg" alt="logo">
        </SmartLink>
        <ul class="hidden md:flex justify-end items-center flex-1 h-full main-menu">
          <li class="h-full">
            <SmartLink to="/apie" class-name="px-3 lg:px-4 flex justify-center items-center h-full font-semibold">
              Apie
            </SmartLink>
          </li>
          <li class="h-full">
            <div class="px-3 lg:px-4 flex justify-center items-center h-full font-semibold cursor-pointer">
              <span>Paslaugos</span>
              <span class="menu-caret ml-2" aria-hidden="true">▾</span>
            </div>
            <ul class="submenu bg-white z-10">
              <li>
                <SmartLink to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu">
                  Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dervų ir kt
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/ortakiu-sistemos-ventiliatoriu-valymas-nuo-dulkiu">
                  Ortakių sistemos, ventiliatorių valymas nuo dulkių
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-valymas">
                  Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-sachtu-dezinfekcija">
                  Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/dumtraukiu-kaminu-valymas">
                  Dumtraukių (kaminų) valymas
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/ortakiu-vedinimo-kanalu-valymo-irangos-nuoma">
                  Ortakių, vėdinimo kanalų valymo įrangos nuoma
                </SmartLink>
              </li>
            </ul>
          </li>
          <li class="h-full">
            <SmartLink to="/galerija" class-name="px-3 lg:px-4 flex justify-center items-center h-full font-semibold">
              Galerija
            </SmartLink>
          </li>
          <li class="h-full">
            <SmartLink to="/technologijos" class-name="px-3 lg:px-4 flex justify-center items-center h-full font-semibold">
              Technologijos
            </SmartLink>
          </li>
          <li class="h-full">
            <div class="px-3 lg:px-4 flex justify-center items-center h-full font-semibold cursor-pointer">
              <span>Parduodama įranga</span>
              <span class="menu-caret ml-2" aria-hidden="true">▾</span>
            </div>
            <ul class="submenu submenu-iranga bg-white z-10">
              <li>
                <SmartLink to="/iranga/rotaciniai-lankstus-velenai">
                  Rotaciniai-lankstūs velenai
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/sepetines-masinos">
                  Šepetinės mašinos
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/video-foto-inspektavimo-robotas">
                  Video, foto ispektavimo robotas
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/mobilios-dulkiu-surinkimo-masinos">
                  Mobilios dulkių surinkimo mašinos
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/sepeciai-centravimo-diskai">
                  Šepečiai ir centravimo diskai
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/optimalus-ortakiu-valymo-komplektas">
                  Optimalus ortakių valymo komplektas
                </SmartLink>
              </li>
            </ul>
          </li>
          <li class="h-full">
            <SmartLink to="/kontaktai" class-name="px-3 lg:px-4 flex justify-center items-center h-full font-semibold">
              Kontaktai
            </SmartLink>
          </li>
          <li class="h-full lang-switcher px-2 flex items-center">
            <button
              class="lang-switcher__btn px-3 lg:px-3 flex items-center font-semibold focus:outline-none"
              type="button"
              aria-haspopup="true"
              :aria-expanded="showLangMenu ? 'true' : 'false'"
              @click.stop="toggleLangMenu"
              @keydown.esc.prevent="closeLangMenu"
              :aria-label="`Language: ${currentLang.label}`"
            >
              <img class="lang-switcher__flag" :src="currentLang.flag" :alt="currentLang.label">
              <span class="ml-2 lang-switcher__caret" aria-hidden="true">▾</span>
            </button>
            <ul v-if="showLangMenu" class="lang-switcher__menu bg-white z-20">
              <li
                v-for="lang in languages"
                :key="lang.code"
                class="lang-switcher__item"
              >
                <button
                  class="lang-switcher__option"
                  type="button"
                  @click="selectLanguage(lang.code)"
                  :aria-label="lang.label"
                  :title="lang.label"
                >
                  <img class="lang-switcher__flag" :src="lang.flag" :alt="lang.label">
                </button>
              </li>
            </ul>
          </li>
          <li class="contact h-full px-3 h-full">
            <a href="tel:+37067619114" class="h-full flex flex-col justify-center items-center font-semibold text-white">
              <span class="text-base">Susisiekite su mumis:</span>
              <span class="font-semibold">+370 676 19 114</span>
              <span class="text-base">Licencijuota įmonė</span>
            </a>
          </li>
        </ul>
        <div class="block md:hidden">
          <button
            class="hamburger hamburger--elastic focus:outline-none"
            :class="{'is-active': show}"
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            @click="show = !show"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <transition name="slide-right">
      <div v-if="show" class="mob-menu absolute w-full z-10">
        <ul class="bg-white">
          <li class="px-8 py-6 border-b border-gray-100">
            <p class="text-sm font-semibold text-gray-500 mb-3">
              Kalba
            </p>
            <div class="flex items-center gap-2">
              <button
                v-for="lang in languages"
                :key="`mob-${lang.code}`"
                type="button"
                class="lang-switcher__pill"
                :class="{'lang-switcher__pill--active': lang.code === currentLangCode}"
                @click="selectLanguage(lang.code)"
                :aria-label="lang.label"
                :title="lang.label"
              >
                <img class="lang-switcher__flag" :src="lang.flag" :alt="lang.label">
              </button>
            </div>
          </li>
          <li class="">
            <SmartLink to="/apie" class-name="block py-6 pl-8 font-semibold">
              Apie
            </SmartLink>
          </li>
          <li class="">
            <div
              class="flex py-6 px-8 font-semibold justify-between items-center"
              @click="mobSubMenu = !mobSubMenu"
            >
              Paslaugos
              <div class="w-6" :class="{'rotate': mobSubMenu}" style="transition-duration: 0.2s;">
                <img class="w-full" src="~/assets/img/arrow-icon.svg" alt="svg">
              </div>
            </div>
            <ul class="mob-submenu" :class="{'active': mobSubMenu}">
              <li>
                <SmartLink to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu" class-name="block w-full font-semibold">
                  Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dervų ir kt
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/ortakiu-sistemos-ventiliatoriu-valymas-nuo-dulkiu" class-name="block  w-full 8 font-semibold">
                  Ortakių sistemos, ventiliatorių valymas nuo dulkių
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-valymas" class-name="block  w-full font-semibold">
                  Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-sachtu-dezinfekcija" class-name="block  w-full  font-semibold">
                  Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/dumtraukiu-kaminu-valymas" class-name="block  w-full  font-semibold">
                  Dumtraukių (kaminų) valymas
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/paslaugos/ortakiu-vedinimo-kanalu-valymo-irangos-nuoma" class-name="block  w-full  font-semibold">
                  Ortakių, vėdinimo kanalų valymo įrangos nuoma
                </SmartLink>
              </li>
            </ul>
          </li>
          <li class="">
            <SmartLink to="/galerija" class-name="block py-6 pl-8 font-semibold">
              Galerija
            </SmartLink>
          </li>
          <li class="">
            <SmartLink to="/technologijos" class-name="block py-6 pl-8 font-semibold">
              Technologijos
            </SmartLink>
          </li>
          <li>
            <div
              class="flex py-6 px-8 font-semibold justify-between items-center"
              @click="mobSubMenu2 = !mobSubMenu2"
            >
              Parduodama įranga
              <div class="w-6" :class="{'rotate': mobSubMenu2}" style="transition-duration: 0.2s;">
                <img class="w-full" src="~/assets/img/arrow-icon.svg" alt="svg">
              </div>
            </div>
            <ul class="mob-submenu" :class="{'active': mobSubMenu2}">
              <li>
                <SmartLink to="/iranga/rotaciniai-lankstus-velenai" class-name="block w-full font-semibold">
                  Rotaciniai-lankstūs velenai
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/sepetines-masinos" class-name="block w-full font-semibold">
                  Šepetinės mašinos
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/video-foto-inspektavimo-robotas" class-name="block w-full font-semibold">
                  Video, foto ispektavimo robotas
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/mobilios-dulkiu-surinkimo-masinos" class-name="block w-full font-semibold">
                  Mobilios dulkių surinkimo mašinos
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/sepeciai-centravimo-diskai" class-name="block w-full font-semibold">
                  Šepečiai ir centravimo diskai
                </SmartLink>
              </li>
              <li>
                <SmartLink to="/iranga/optimalus-ortakiu-valymo-komplektas" class-name="block w-full font-semibold">
                  Optimalus ortakių valymo komplektas
                </SmartLink>
              </li>
            </ul>
          </li>
          <li class="">
            <SmartLink to="/kontaktai" class-name="block py-6 pl-8 font-semibold">
              Kontaktai
            </SmartLink>
          </li>
          <!--        <li class="contact h-full px-3 h-full">-->
          <!--          <a href="tel:+37060736036" class="h-full flex flex-col justify-center items-center font-semibold text-white">-->
          <!--            <span class="text-xl">Susisiekite su mumis:</span>-->
          <!--            <span class="font-semibold text-3xl">+370 6 0736 036</span>-->
          <!--          </a>-->
          <!--        </li>-->
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import SmartLink from '~/components/SmartLink.vue'
import flagLt from '~/assets/img/flags/lt.svg'
import flagEn from '~/assets/img/flags/en.svg'
import flagDe from '~/assets/img/flags/de.svg'
import flagPl from '~/assets/img/flags/pl.svg'

export default {
  components: {
    SmartLink
  },
  data () {
    return {
      show: false,
      mobSubMenu: false,
      mobSubMenu2: false,
      showLangMenu: false,
      currentLangCode: 'lt',
      languages: [
        { code: 'lt', label: 'Lietuvių', flag: flagLt },
        { code: 'en', label: 'English', flag: flagEn },
        { code: 'de', label: 'Deutsch', flag: flagDe },
        { code: 'pl', label: 'Polski', flag: flagPl }
      ]
    }
  },
  computed: {
    currentLang () {
      return this.languages.find(l => l.code === this.currentLangCode) || this.languages[0]
    }
  },
  watch: {
    $route () {
      this.show = false
      this.mobSubMenu = false
      this.mobSubMenu2 = false
      this.showLangMenu = false
      this.currentLangCode = this.getCurrentLang()
      try { window.__em_translate_lang__ = this.currentLangCode } catch (e) {}
      this.syncLangIndicator()
      try {
        window.scrollTo({
          top: 'header',
          left: 0,
          behavior: 'smooth'
        })
      } catch (e) {
        console.log(e)
        window.scrollTo('header', 0)
      }
    }
  },
  mounted () {
    this.currentLangCode = this.getCurrentLang()
    document.addEventListener('click', this.onOutsideClick, { passive: true })
    document.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount () {
    document.removeEventListener('click', this.onOutsideClick)
    document.removeEventListener('keydown', this.onKeydown)
  },
  methods: {
    toggleLangMenu () {
      this.showLangMenu = !this.showLangMenu
    },
    closeLangMenu () {
      this.showLangMenu = false
    },
    onOutsideClick () {
      this.showLangMenu = false
    },
    onKeydown (e) {
      if (e.key === 'Escape') { this.closeLangMenu() }
    },
    getCurrentLang () {
      const cookieLang = this.getGoogTransLang()
      const comboLang = this.getComboLang()
      try {
        if (this.$translate && typeof this.$translate.getLang === 'function') {
          const current = this.$translate.getLang()
          return comboLang || cookieLang || current
        }
      } catch (e) {}
      return comboLang || cookieLang || 'lt'
    },
    getComboLang () {
      try {
        const combo = document.querySelector('.goog-te-combo')
        if (!combo) return null
        const value = (combo.value || '').toLowerCase()
        return ['lt', 'en', 'de', 'pl'].includes(value) ? value : null
      } catch (e) {
        return null
      }
    },
    getGoogTransLang () {
      try {
        const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/)
        if (!match) return null
        const value = decodeURIComponent(match[1] || '')
        const m2 = value.match(/\/([a-z]{2})(?:$|\/)/i)
        const lang = m2 ? m2[1].toLowerCase() : null
        return ['lt', 'en', 'de', 'pl'].includes(lang) ? lang : null
      } catch (e) {
        return null
      }
    },
    syncLangIndicator () {
      let attemptsLeft = 10
      const tick = () => {
        const next = this.getCurrentLang()
        if (next && next !== this.currentLangCode) {
          this.currentLangCode = next
          try { window.__em_translate_lang__ = next } catch (e) {}
        }
        attemptsLeft -= 1
        if (attemptsLeft > 0) {
          setTimeout(tick, 200)
        }
      }
      setTimeout(tick, 0)
    },
    selectLanguage (code) {
      const safe = ['lt', 'en', 'de', 'pl'].includes(code) ? code : 'lt'
      try {
        if (this.$translate && typeof this.$translate.setLang === 'function') {
          this.$translate.setLang(safe)
        }
      } catch (e) {}
      this.currentLangCode = safe
      this.showLangMenu = false
      this.show = false
      try {
        window.__em_translate_lang__ = safe
      } catch (e) {}
      this.syncLangIndicator()
    }
  }
}
</script>

<style scoped lang="scss">
  .main-menu > li > a.nuxt-link-active,
  .main-menu > li > a.nuxt-link-exact-active,
  .main-menu > li > a.router-link-active,
  .main-menu > li > a.router-link-exact-active {
    background: #FAFAFA;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.11);
    position: relative;
    color: #3A425D;
    &:after {
      bottom: 0;
      left: 0;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      width: 100%;
      background: #333C57;
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.11);
    }
  }
  .logo.nuxt-link-active,
  .logo.nuxt-link-exact-active,
  .logo.router-link-active,
  .logo.router-link-exact-active {
    background: none;
    box-shadow: none;
  }
  .logo {
    background: none;
    box-shadow: none;
    position: relative;
    color: unset;
    &:after {
      display: none;
    }
}
.site-header {
animation: 1s appear;
margin: auto;
.main-menu > li > a,
.main-menu > li > div,
.main-menu > li > button {
  font-size: 1.45rem;
}
.menu-caret {
  font-size: 1.1rem;
  opacity: 0.75;
  line-height: 1;
}
li.lang-switcher {
  position: relative;
}
.lang-switcher__btn {
  height: 100%;
  color: #3A425D;
  background: transparent;
}
.lang-switcher__caret {
  font-size: 1.2rem;
  opacity: 0.8;
}
.lang-switcher__menu {
  position: absolute;
  right: 0;
  top: 100%;
  width: 5.2rem;
  border: 1px solid #283650;
  border-radius: 0;
  box-shadow: -1px 0 0px 0px #fff, 1px 0 0px 0px #fff;
  overflow: hidden;
}
.lang-switcher__item {
  border-bottom: 1px solid #f1f1f1;
  &:last-child {
    border-bottom: none;
  }
}
.lang-switcher__option {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0;
  font-weight: 600;
  color: #3A425D;
  background: #fff;
  &:hover {
    background: #3A425D;
    color: #fff;
    font-weight: 600;
  }
}
.lang-switcher__flag {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.lang-switcher__pill {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 0.9rem;
  border: 1px solid #d8dade;
  border-radius: 999px;
  font-weight: 700;
  color: #3A425D;
  background: #fff;
}
.lang-switcher__pill--active {
  border-color: #1A9CFC;
  box-shadow: inset 0 0 0 1px #1A9CFC;
}
li.contact {
  background: linear-gradient(182.4deg, #1A9CFC 6.4%, #1A9CFC 96.45%);
  &:hover {
    background: #1895f1;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.11);
  }
  @media(max-width: 950px) {
    display: none;
  }
}
.mob-menu {
  border-top: 2px solid #333C57;
  border-bottom: 2px solid #333C57;
  li {
    border-bottom: 1px solid #F1F1F1;
    &:hover {
      background: none;
      box-shadow: none;
    }
    &:after {
      display: none;
    }
  }
  a {
    &:after {
      display: none;
    }
  }
}
.mob-submenu {
  top: 8rem;
  left: 0;
  width: 100%;
  color: #727274;
  li {
    overflow: hidden;
    height: 0;
    transition: height 200ms ease-in;
    color: #727274;
    border-bottom: none;
    display: flex;
    align-items: center;
    padding: 0;
    &:after {
      display: none;
    }
    a {
      padding-left: 3rem;
      &:after {
        display: none;
      }
    }
  }
  .nuxt-link-active,
  .router-link-active,
  .router-link-exact-active {
    background: none;
    box-shadow: none;
    position: relative;
    color: unset;
    &:after {
      display: none;
    }
  }
}
.active {
  background: #FAFAFA;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.11);
  li {
    border-bottom: 1px solid #F1F1F1;
    height: 7rem;
    &:not(:last-child) {
      border-bottom: 1px solid #d8dade;
    }
  }
}
  .rotate {
    transform: rotate(180deg);
  }
li {
  position: relative;
  color: #3A425D;
  transition: width .2s ease 0s,left .2s ease 0s;
  &:after {
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #333C57;
    transition: width .2s ease 0s,left .2s ease 0s;
    width: 0;
  }
  &:hover {
    background: #FAFAFA;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.11);
    &:after {
      width: 100%;
      left: 0;
    }
    .submenu {
      border: 1px solid #283650;
      li {
        height: 9rem;
        &:not(:last-child) {
          border-bottom: 1px solid #d8dade;
        }
      }
    }
    .submenu-iranga li{
      height: 7rem;
    }
  }
  .submenu {
    top: 8rem;
    left: 0;
    width: 38rem;
    color: #727274;
    box-shadow: -1px 0 0px 0px #fff, 1px 0 0px 0px #fff;
    position: absolute;
    z-index: 1;
    li {
      overflow: hidden;
      height: 0;
      transition: height 200ms ease-in;
      color: #727274;
      &:hover {
        background: #3A425D;
        color: #fff;
        font-weight: 600;
      }
      &:after {
        display: none;
      }
      a {
        display: block;
        padding: 2rem;
      }
    }
    .nuxt-link-active,
    .nuxt-link-exact-active,
    .router-link-active,
    .router-link-exact-active {
      background: none;
      box-shadow: none;
      position: relative;
      color: unset;
      &:after {
      display: none;
      }
    }
    li:after {
      display: none;
    }
  }
}
}

$hamburger-padding-x: 0;
$hamburger-padding-y: 0;
$hamburger-layer-width: 3rem;
$hamburger-layer-spacing: 5px;
$hamburger-layer-color: #455076;
$hamburger-layer-border-radius: 0;
@import "hamburgers/_sass/hamburgers/hamburgers";

@keyframes appear {
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
}

.slide-right-leave-active, .slide-right-enter-active {
  transition-duration: 0.2s;
}
.slide-right-enter-to, .slide-right-leave {
  transform: translateX(0);
}

.slide-right-enter, .slide-right-leave-to {
  transform: translateX(100%);
}

</style>
