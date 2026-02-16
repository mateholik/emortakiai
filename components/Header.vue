<template>
  <nav class="site-header relative">
    <div class="container">
      <div class="flex items-center justify-between h-20 md:h-32">
        <NuxtLink to="/" class="logo block mr-16">
          <img class="w-48 md:w-auto" src="~/assets/img/logo.svg" alt="logo">
        </NuxtLink>
        <ul class="hidden md:flex justify-end items-center flex-1 h-full main-menu">
          <li class="h-full">
            <NuxtLink to="/apie" class="px-3 lg:px-4 flex justify-center items-center h-full font-semibold">
              Apie
            </NuxtLink>
          </li>
          <li class="h-full">
            <div class="px-3 lg:px-4 flex justify-center items-center h-full font-semibold cursor-pointer">
              <span>Paslaugos</span>
              <span class="menu-caret ml-2" aria-hidden="true">▾</span>
            </div>
            <ul class="submenu bg-white z-10">
              <li>
                <NuxtLink to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu">
                  Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dervų ir kt
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/ortakiu-sistemos-ventiliatoriu-valymas-nuo-dulkiu">
                  Ortakių sistemos, ventiliatorių valymas nuo dulkių
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-valymas">
                  Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-sachtu-dezinfekcija">
                  Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/dumtraukiu-kaminu-valymas">
                  Dumtraukių (kaminų) valymas
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/ortakiu-vedinimo-kanalu-valymo-irangos-nuoma">
                  Ortakių, vėdinimo kanalų valymo įrangos nuoma
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="h-full">
            <NuxtLink to="/galerija" class="px-3 lg:px-4 flex justify-center items-center h-full font-semibold">
              Galerija
            </NuxtLink>
          </li>
          <li class="h-full">
            <NuxtLink to="/technologijos" class="px-3 lg:px-4 flex justify-center items-center h-full font-semibold">
              Technologijos
            </NuxtLink>
          </li>
          <li class="h-full">
            <div class="px-3 lg:px-4 flex justify-center items-center h-full font-semibold cursor-pointer">
              <span>Parduodama įranga</span>
              <span class="menu-caret ml-2" aria-hidden="true">▾</span>
            </div>
            <ul class="submenu submenu-iranga bg-white z-10">
              <li>
                <NuxtLink to="/iranga/rotaciniai-lankstus-velenai">
                  Rotaciniai-lankstūs velenai
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/sepetines-masinos">
                  Šepetinės mašinos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/video-foto-inspektavimo-robotas">
                  Video, foto ispektavimo robotas
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/mobilios-dulkiu-surinkimo-masinos">
                  Mobilios dulkių surinkimo mašinos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/sepeciai-centravimo-diskai">
                  Šepečiai ir centravimo diskai
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/optimalus-ortakiu-valymo-komplektas">
                  Optimalus ortakių valymo komplektas
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="h-full">
            <NuxtLink to="/kontaktai" class="px-3 lg:px-4 flex justify-center items-center h-full font-semibold">
              Kontaktai
            </NuxtLink>
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
          <li class="contact h-full px-3 ">
            <a href="tel:+37067619114" class="h-full flex flex-col justify-center items-center font-semibold text-white">
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
            <NuxtLink to="/apie" class="block py-6 pl-8 font-semibold">
              Apie
            </NuxtLink>
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
                <NuxtLink to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu" class="block w-full font-semibold">
                  Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dervų ir kt
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/ortakiu-sistemos-ventiliatoriu-valymas-nuo-dulkiu" class="block  w-full 8 font-semibold">
                  Ortakių sistemos, ventiliatorių valymas nuo dulkių
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-valymas" class="block  w-full font-semibold">
                  Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-sachtu-dezinfekcija" class="block  w-full  font-semibold">
                  Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/dumtraukiu-kaminu-valymas" class="block  w-full  font-semibold">
                  Dumtraukių (kaminų) valymas
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/paslaugos/ortakiu-vedinimo-kanalu-valymo-irangos-nuoma" class="block  w-full  font-semibold">
                  Ortakių, vėdinimo kanalų valymo įrangos nuoma
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="">
            <NuxtLink to="/galerija" class="block py-6 pl-8 font-semibold">
              Galerija
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink to="/technologijos" class="block py-6 pl-8 font-semibold">
              Technologijos
            </NuxtLink>
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
                <NuxtLink to="/iranga/rotaciniai-lankstus-velenai" class="block w-full font-semibold">
                  Rotaciniai-lankstūs velenai
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/sepetines-masinos" class="block w-full font-semibold">
                  Šepetinės mašinos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/video-foto-inspektavimo-robotas" class="block w-full font-semibold">
                  Video, foto ispektavimo robotas
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/mobilios-dulkiu-surinkimo-masinos" class="block w-full font-semibold">
                  Mobilios dulkių surinkimo mašinos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/sepeciai-centravimo-diskai" class="block w-full font-semibold">
                  Šepečiai ir centravimo diskai
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iranga/optimalus-ortakiu-valymo-komplektas" class="block w-full font-semibold">
                  Optimalus ortakių valymo komplektas
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="">
            <NuxtLink to="/kontaktai" class="block py-6 pl-8 font-semibold">
              Kontaktai
            </NuxtLink>
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
import flagLt from '~/assets/img/flags/lt.svg'
import flagEn from '~/assets/img/flags/en.svg'
import flagDe from '~/assets/img/flags/de.svg'
import flagPl from '~/assets/img/flags/pl.svg'
import { useGoogleTranslate } from '#imports'

export default {
  setup () {
    const { activeLanguage, isLoaded, setLanguage, supportedLanguages } = useGoogleTranslate()
    return { activeLanguage, isLoaded, setLanguage, supportedLanguages }
  },
  data () {
    return {
      show: false,
      mobSubMenu: false,
      mobSubMenu2: false,
      showLangMenu: false,
      languages: [
        { code: 'lt', label: 'Lietuvių', flag: flagLt },
        { code: 'en', label: 'English', flag: flagEn },
        { code: 'de', label: 'Deutsch', flag: flagDe },
        { code: 'pl', label: 'Polski', flag: flagPl }
      ]
    }
  },
  computed: {
    currentLangCode () {
      if (import.meta.server) { return 'lt' }

      const loaded = this.isLoaded && typeof this.isLoaded === 'object' && 'value' in this.isLoaded
        ? this.isLoaded.value
        : this.isLoaded
      if (!loaded) { return 'lt' }

      const raw = this.activeLanguage && typeof this.activeLanguage === 'object' && 'value' in this.activeLanguage
        ? this.activeLanguage.value
        : this.activeLanguage
      return ['lt', 'en', 'de', 'pl'].includes(raw) ? raw : 'lt'
    },
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
    selectLanguage (code) {
      const safe = ['lt', 'en', 'de', 'pl'].includes(code) ? code : 'lt'
      try {
        if (typeof this.setLanguage === 'function') { this.setLanguage(safe) }
      } catch (e) {}
      this.showLangMenu = false
      this.show = false
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
