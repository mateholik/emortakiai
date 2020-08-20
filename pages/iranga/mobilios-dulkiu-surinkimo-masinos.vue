<template>
  <div>
    <section class="bg py-12">
      <div class="container">
        <div class="text-center">
          <div class="mb-4">
            <img
              class="h-32 w-32 mx-auto"
              src="~/assets/img/iranga/logo partnerio.png"
              alt="partner logo"
            />
          </div>
          <p class="text-white md:text-2xl">
            Profesionali įranga
          </p>
        </div>
      </div>
    </section>

    <main class="pt-8 md:pt-24 pb-8">
      <div class="container">
        <div class="lg:flex">
          <div class="flex-1 lg:pr-16">
            <h1 class="mb-10 font-semibold text-3xl md:text-5xl">
              Mobilios dulkių surinkimo mašinos
            </h1>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Mobili dulkių surinkimo mašina L5800
            </h3>
            <div>
              <Gallery :paveiksliukai="images1" />
            </div>
            <div class="pb-10">
              <a
                href="tel:+37067619114"
                class="btn max-w-xs"
                style="margin-left: 0; height: 4rem;"
              >
                Skambinti dėl kainos »
              </a>
            </div>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Techninė charakteristika:
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Korpusas bei filtro blokas pagamintas iš nerūdijančio plieno
                (AISI 430)
              </li>
              <li class="mb-4">
                Darbinis ratas yra su radialine sparnuote skirtas išvalytam orui
                judėti
              </li>
              <li class="mb-4">
                Rekomenduojama naudojimo temperatūra patalpose nuo +40 iki –20
                laipsnių.
              </li>
              <li class="mb-4">
                Gabenamų dujinių medžiagų temperatūra neturi viršyti 80 ° C
              </li>
              <li class="mb-4">
                Be filtrų bazinem modelyje oro srautas gali skirtis iki 10%,
                priklausomai nuo ventiliatoriaus tipo.
              </li>
              <li class="mb-4">
                Gabaritai: 960 mm x 625 mm x 500 mm
              </li>

              <li class="mb-4">
                Svoris: 52 kg
              </li>
              <li class="mb-4">
                Elekros pajungimas - vienfazis, 220 V
              </li>
              <li class="mb-4">
                Mašina su ratukais ir lengvai eksplotuojama.
              </li>
              <li class="mb-4">
                Mašinos triukšmo lygis kinta priklausomai nuo aplinkos, kurioje
                ji naudojama. Dirbant rekomenduojama išmatuoti triukšmo lygį.
              </li>
              <li class="mb-4">
                Maksimalus slėgis - 1200 Pa
              </li>
              <li class="mb-4">
                Oro patekimas-pasitraukimas - Ø 315 mm
              </li>
            </ul>
            <!--            niu-->
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Mobili dulkių surinkimo mašina S3400
            </h3>
            <div>
              <Gallery :paveiksliukai="images" />
            </div>
            <div class="pb-10">
              <a
                href="tel:+37067619114"
                class="btn max-w-xs"
                style="margin-left: 0; height: 4rem;"
              >
                Skambinti dėl kainos »
              </a>
            </div>
            <p class="mb-12">
              <strong>Paskirtis:</strong> dulkių ir kitų medžiagų surinkimas
              ortakiuose. Taip pat oro siurbimas ir jo valymas.
            </p>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Techninė charakteristika:
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Korpusas bei filtro blokas pagamintas iš nerūdijančio plieno
                (AISI 430)
              </li>
              <li class="mb-4">
                Rekomenduojama naudojimo temperatūra patalpose nuo +40 iki –20
                laipsnių.
              </li>
              <li class="mb-4">
                Gabenamų dujinių medžiagų temperatūra neturi viršyti 80 ° C
              </li>
              <li class="mb-4">
                Maksimalus slėgis - 660 Pa
              </li>
              <li class="mb-4">
                Oro srautas 3690 m3/h
              </li>
              <li class="mb-4">
                Gabaritai: 760 mm x 430 mm x 380 mm
              </li>

              <li class="mb-4">
                Svoris: 21 kg
              </li>
              <li class="mb-4">
                Oro patekimas-pasitraukimas - Ø 254 mm
              </li>
              <li class="mb-4">
                Be filtrų bazinem modelyje oro srautas gali skirtis iki 10%,
                priklausomai nuo ventiliatoriaus tipo
              </li>
              <li class="mb-4">
                Mašinos triukšmo lygis kinta priklausomai nuo aplinkos, kurioje
                ji naudojama. Dirbant rekomenduojama išmatuoti triukšmo lygį.
              </li>
            </ul>
          </div>
          <Sidebar />
        </div>
      </div>
    </main>

    <Banner />
  </div>
</template>

<script>
import img1 from './../../assets/img/iranga/L5800 1.jpg'
import img2 from './../../assets/img/iranga/s3400 1.jpg'
import img3 from './../../assets/img/iranga/s 3400 2.jpg'
import Sidebar from '~/components/Sidebar-iranga.vue'
import Banner from '~/components/Banner.vue'
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    Sidebar,
    Banner,
    Gallery
  },
  data () {
    return {
      images1: [img1],
      images: [img2, img3]
    }
  }
}
</script>

<style>
.bg {
  background: url('~assets/img/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg-blue-custom {
  background: linear-gradient(180.52deg, #1a9cfc 6.4%, #1a9cfc 96.45%);
}
.pb-1\/2 {
  padding-bottom: 57%;
}
</style>
