<template>
  <div>
    <section class="bg py-12">
      <div class="container">
        <div class="text-center">
<!--          <h1 class="text-white font-semibold text-4xl md:text-5xl">-->
<!--            Įranga-->
<!--          </h1>-->
          <div class="mb-4">
            <img class="h-32 w-32 mx-auto" src="~/assets/img/iranga/logo partnerio.png" alt="partner logo">
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
              Rotaciniai-lankstūs velenai
            </h1>
            <div>
              <Gallery
                :paveiksliukai="images"
              />
            </div>
            <div class="pb-10">
              <a href="tel:+37067619114" class="btn max-w-xs" style="margin-left: 0; height: 4rem;">
                Skambinti dėl kainos »
              </a>
            </div>
            <p class="mb-12">
              <strong>Paskirtis:</strong> dulkių, riebalų, dervų ir kitų nuosedų valymas ortakiuose, vedinimo kanaluose, kaminuose.
            </p>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Techniniai duomenys:
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Valo (veleno) diametras: 8 mm, 10 mm ,12 mm,
              </li>
              <li class="mb-4">
                Valo ilgis: 3m, 5m,  7m, 10m, 15m, 20m
              </li>
              <li class="mb-4">
                Maksimalus naudojamo šepečio diametras iki 600 mm.
              </li>
              <li class="mb-4">
                Apvalių ir stačiakampių ortakių valymas
              </li>
              <li class="mb-4">
                Naudojant lankstų veleną su šepečiu, kurio skersmuo yra didesnis nei 300 mm, rekomenduojama naudoti centravimo diską.
              </li>
              <li class="mb-4">
                Naudojami su šepetine mašina S, perfortatoriais arba elektriniais - akomuletoriniais gręžtuvais
              </li>
              <li class="mb-4">
                Dvipusė sukimosi kryptis.
              </li>
              <li class="mb-4">
                Sukimo momentas iš variklio (gręžtuvo) perduodamas šepečiui veleno gale
              </li>
              <li class="mb-4">
                Guolinė sistema
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
import img1 from './../../assets/img/iranga/rotacinis lankstus velenas1.jpg'
import img2 from './../../assets/img/iranga/rotacinis lankstus velenas 2.jpg'
import img3 from './../../assets/img/iranga/rotacinis lankstus velenas 3.jpg'
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
      images: [img1, img2, img3]
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
    background: linear-gradient(180.52deg, #1A9CFC 6.4%, #1A9CFC 96.45%);
  }
  .pb-1\/2 {
    padding-bottom: 57%;
  }
</style>
