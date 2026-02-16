<template>
  <div>
    <section class="bg py-12 md:pt-32 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-white font-bold text-4xl md:text-6xl mb-6 md:mb-8 leading-relaxed">
            Reikia išvalyti ortakius nuo riebalų, dulkių <br class="hidden lg:block"> ar kitų teršalų?
          </h1>
          <p class="text-white md:text-3xl mb-12">
            Mes siūlome kokybiškas ortakių, gyvenamųjų pastatų vedinimo kanalų (šachtų) ir kaminų valymo paslaugas
          </p>
          <div class="text-xl text-white flex items-center justify-center pb-12">
            <span>Teisinė informacija:</span>
            <a href="/1.pdf" target="_blank" class="pl-6">
              <img class="w-10 h-10" src="~/assets/img/pdf.svg" alt="pdf">
            </a>
            <span class="ml-8">Licencija:</span>
            <a href="/licencija.png" target="_blank" class="pl-6">
              <img class="w-10 h-10" src="~/assets/img/pdf.svg" alt="pdf">
            </a>
          </div>
          <div class="mb-8 md:mb-12">
            <nuxt-link to="/galerija" class="btn max-w-xs">
              Daugiau informacijos »
            </nuxt-link>
          </div>
          <div class="w-12 h-12 mx-auto">
            <img class="" src="~/assets/img/arrow-down.svg" alt="arrow">
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 md:py-16">
      <div class="container">
        <div class="text-center mb-8 md:mb-16">
          <h2 class="text-4xl md:text-5xl font-semibold mb-2">
            Paslaugos
          </h2>
          <p class="text-2xl">
            Profesionaliai atliekamos paslaugos
          </p>
        </div>
        <div class="paslaugos flex flex-wrap px-4 md:px-0 justify-center">
          <div class="w-full max-w-2xl mx-auto md:mx-0 md:max-w-full md:w-1/2 lg:w-1/3 px-10 mb-8 md:mb-16">
            <nuxt-link to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu" class="block shadow-xl">
              <img class="w-full mb-4 md:mb-8" src="~/assets/img/thumbs/4.jpg" alt="">
              <div class="px-2">
                <p class="text-center md:text-3xl mb-4 md:mb-8">
                  Ortakių, gartraukių, ventiliatorių valymas nuo riebalų
                </p>
                <div class="max-w-xs mx-auto pb-8 md:pb-12">
                  <div class="btn btn--short">
                    Plačiau »
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="w-full max-w-2xl mx-auto md:mx-0 md:max-w-full md:w-1/2 lg:w-1/3 px-10 mb-8 md:mb-16">
            <nuxt-link to="/paslaugos/ortakiu-sistemos-ventiliatoriu-valymas-nuo-dulkiu" class="block shadow-xl">
              <img class="w-full mb-4 md:mb-8" src="~/assets/img/thumbs/1.jpg" alt="">
              <div class="px-2">
                <p class="text-center md:text-3xl mb-4 md:mb-8">
                  Ortakių sistemos, ventiliatorių valymas nuo dulkių
                </p>
                <div class="max-w-xs mx-auto pb-8 md:pb-12">
                  <div class="btn btn--short">
                    Plačiau »
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="w-full max-w-2xl mx-auto md:mx-0 md:max-w-full md:w-1/2 lg:w-1/3 px-10 mb-8 md:mb-16">
            <nuxt-link to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-valymas" class="block shadow-xl">
              <img class="w-full mb-4 md:mb-8" src="~/assets/img/thumbs/5.jpg" alt="">
              <div class="px-2">
                <p class="text-center md:text-3xl mb-4 md:mb-8">
                  Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
                </p>
                <div class="max-w-xs mx-auto pb-8 md:pb-12">
                  <div class="btn btn--short">
                    Plačiau »
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="w-full max-w-2xl mx-auto md:mx-0 md:max-w-full md:w-1/2 lg:w-1/3 px-10 mb-8 md:mb-16">
            <nuxt-link to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-sachtu-dezinfekcija" class="block shadow-xl">
              <img class="w-full mb-4 md:mb-8" src="~/assets/img/thumbs/7.jpg" alt="">
              <div class="px-2">
                <p class="text-center md:text-3xl mb-4 md:mb-8">
                  Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
                </p>
                <div class="max-w-xs mx-auto pb-8 md:pb-12">
                  <div class="btn btn--short">
                    Plačiau »
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="w-full max-w-2xl mx-auto md:mx-0 md:max-w-full md:w-1/2 lg:w-1/3 px-10 mb-8 md:mb-16">
            <nuxt-link to="/paslaugos/dumtraukiu-kaminu-valymas" class="block shadow-xl">
              <img class="w-full mb-4 md:mb-8" src="~/assets/img/thumbs/3.jpg" alt="">
              <div class="px-2">
                <p class="text-center md:text-3xl mb-4 md:mb-8">
                  Dumtraukių (kaminų) valymas
                </p>
                <div class="max-w-xs mx-auto pb-8 md:pb-12">
                  <div class="btn btn--short">
                    Plačiau »
                  </div>
                </div>
              </div>
            </nuxt-link>
            <a href="#" class="block shadow-xl" />
          </div>
        </div>
      </div>
    </section>

    <Banner />

    <section class="py-8 md:py-16">
      <div class="container">
        <div class="text-center mb-8 md:mb-16">
          <h2 class="text-4xl md:text-5xl font-semibold mb-2">
            Atlikti darbai
          </h2>
          <p class="text-2xl">
            Mūsų atlikti darbai
          </p>
        </div>
        <div>
          <Gallery
            where="homepage"
          />
        </div>
        <div>
          <nuxt-link to="/galerija" class="btn max-w-xs">
            Daugiau nuotraukų »
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="py-8 md:py-16">
      <div class="container">
        <div class="text-center mb-8 md:mb-16">
          <h2 class="text-4xl md:text-5xl font-semibold mb-2">
            Kontaktai
          </h2>
          <p class="text-2xl">
            Susisiekite su mumis
          </p>
        </div>
        <Contacts />
      </div>
    </section>
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import Banner from '~/components/Banner.vue'
import Contacts from '~/components/Contacts.vue'

export default {
  components: {
    Gallery,
    Banner,
    Contacts
  }
}
</script>

<style lang="scss">
  .bg {
    background: url('~/assets/img/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .bg-blue-custom {
    background: linear-gradient(180.52deg, #1A9CFC 6.4%, #1A9CFC 96.45%);
  }
  .paslaugos a {
    transition: all 0.2s;
    &:hover {
      box-shadow: 0 12px 15px -5px #030f19, 0 10px 5px -5px #291e6f;
    }
  }
</style>
