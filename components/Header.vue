<template>
  <nav class="relative">
    <div class="container">
      <div class="flex items-center justify-between h-20 md:h-32">
        <nuxt-link to="/" class="logo block mr-16">
          <img class="w-48 md:w-auto" src="~/assets/img/logo.svg" alt="logo">
        </nuxt-link>
        <ul class="hidden md:flex justify-end items-center flex-1 h-full ">
          <li class="h-full">
            <nuxt-link to="/apie" class="px-4 lg:px-6 flex justify-center items-center h-full font-semibold">
              Apie
            </nuxt-link>
          </li>
          <li class="h-full">
            <div class="px-4 lg:px-6 flex justify-center items-center h-full font-semibold cursor-pointer">
              Paslaugos
            </div>
            <ul class="submenu bg-white z-10">
              <li>
                <nuxt-link to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu">
                  Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dervų ir kt
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/ortakiu-sistemos-ventiliatoriu-valymas-nuo-dulkiu">
                  Ortakių sistemos, ventiliatorių valymas nuo dulkių
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-valymas">
                  Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-sachtu-dezinfekcija">
                  Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/dumtraukiu-kaminu-valymas">
                  Dumtraukių (kaminų) valymas
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/ortakiu-vedinimo-kanalu-valymo-irangos-nuoma">
                  Ortakių, vėdinimo kanalų valymo įrangos nuoma
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="h-full">
            <nuxt-link to="/galerija" class="px-4 lg:px-6 flex justify-center items-center h-full font-semibold">
              Galerija
            </nuxt-link>
          </li>
          <li class="h-full">
            <nuxt-link to="/technologijos" class="px-4 lg:px-6 flex justify-center items-center h-full font-semibold">
              Technologijos
            </nuxt-link>
          </li>
          <li class="h-full">
            <div class="px-4 lg:px-6 flex justify-center items-center h-full font-semibold cursor-pointer">
              Parduodama įranga
            </div>
            <ul class="submenu submenu-iranga bg-white z-10">
              <li>
                <nuxt-link to="/iranga/rotaciniai-lankstus-velenai">
                  Rotaciniai-lankstūs velenai
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/sepetines-masinos">
                  Šepetinės mašinos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/video-foto-inspektavimo-robotas">
                  Video, foto ispektavimo robotas
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/mobilios-dulkiu-surinkimo-masinos">
                  Mobilios dulkių surinkimo mašinos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/sepeciai-centravimo-diskai">
                  Šepečiai ir centravimo diskai
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/optimalus-ortakiu-valymo-komplektas">
                  Optimalus ortakių valymo komplektas
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="h-full">
            <nuxt-link to="/kontaktai" class="px-4 lg:px-6 flex justify-center items-center h-full font-semibold">
              Kontaktai
            </nuxt-link>
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
          <li class="">
            <nuxt-link to="/apie" class="block py-6 pl-8 font-semibold">
              Apie
            </nuxt-link>
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
                <nuxt-link to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu" class="block w-full font-semibold">
                  Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dervų ir kt
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/ortakiu-sistemos-ventiliatoriu-valymas-nuo-dulkiu" class="block  w-full 8 font-semibold">
                  Ortakių sistemos, ventiliatorių valymas nuo dulkių
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-valymas" class="block  w-full font-semibold">
                  Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-sachtu-dezinfekcija" class="block  w-full  font-semibold">
                  Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/dumtraukiu-kaminu-valymas" class="block  w-full  font-semibold">
                  Dumtraukių (kaminų) valymas
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/paslaugos/ortakiu-vedinimo-kanalu-valymo-irangos-nuoma" class="block  w-full  font-semibold">
                  Ortakių, vėdinimo kanalų valymo įrangos nuoma
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="">
            <nuxt-link to="/galerija" class="block py-6 pl-8 font-semibold">
              Galerija
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link to="/technologijos" class="block py-6 pl-8 font-semibold">
              Technologijos
            </nuxt-link>
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
                <nuxt-link to="/iranga/rotaciniai-lankstus-velenai" class="block w-full font-semibold">
                  Rotaciniai-lankstūs velenai
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/sepetines-masinos" class="block w-full font-semibold">
                  Šepetinės mašinos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/video-foto-inspektavimo-robotas" class="block w-full font-semibold">
                  Video, foto ispektavimo robotas
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/mobilios-dulkiu-surinkimo-masinos" class="block w-full font-semibold">
                  Mobilios dulkių surinkimo mašinos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/sepeciai-centravimo-diskai" class="block w-full font-semibold">
                  Šepečiai ir centravimo diskai
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/iranga/optimalus-ortakiu-valymo-komplektas" class="block w-full font-semibold">
                  Optimalus ortakių valymo komplektas
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="">
            <nuxt-link to="/kontaktai" class="block py-6 pl-8 font-semibold">
              Kontaktai
            </nuxt-link>
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
export default {
  data () {
    return {
      show: false,
      mobSubMenu: false,
      mobSubMenu2: false
    }
  },
  watch: {
    $route () {
      this.show = false
      this.mobSubMenu = false
      this.mobSubMenu2 = false
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
  }
}
</script>

<style lang="scss">
  .nuxt-link-active {
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
  .logo {
    background: none;
    box-shadow: none;
    position: relative;
    color: unset;
    &:after {
      display: none;
    }
}
nav {
animation: 1s appear;
margin: auto;
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
  .nuxt-link-active {
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
    .nuxt-link-active {
      background: none;
      box-shadow: none;
      position: relative;
      color: unset;
      &:after {
      display: none;
      }
    }
    nav li:after {
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
@import "~hamburgers/_sass/hamburgers/hamburgers";

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
