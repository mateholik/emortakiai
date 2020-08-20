<template>
  <div>
    <section class="bg py-12">
      <div class="container">
        <div class="text-center">
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
              Optimalus ortakių valymo komplektas
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
              <strong>Paskirtis:</strong> ortakių valymas nuo dulkių, riebalų, dervų, suodžių
            </p>
            <p>Rinkinys tinkamas verslui pradėti, taip pat patirtį turinčiai įmonei. Tinka bet kokio tipo ventiliacinėms sistemoms valyti. Visas rinkinys naudojamas dulkėms pašalinti. Riebalų pašalinimui, nenaudojama dulkių surinkimo mašina ir gofruotė. Rinkinys telpa keleiviniame automobilyje.</p>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Komplektą sudaro
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Šepetinė mašina S
              </li>
              <li class="mb-4">
                Lankstus velenas, kuris pasirenkamas priklausomai nuo vazdyno diametro ir užterštumo
              </li>
              <li class="mb-4">
                Lankstus veleno dėklas su logotipu
              </li>
              <li class="mb-4">
                Dulkių surinkimo mašina L5800 ir filtras. Tinka didelių apimčių valymo darbams.
              </li>
              <li class="mb-4">
                Gofruota rankovė (10 m)
              </li>
              <li class="mb-4">
                Šepečių rinkinys (7vnt). Apima 7 dažniausiai naudojamus šepečius. Taip pat yra galimybė pasirinki norimus šepečius.              </li>
              <li class="mb-4">
                Centravimo diskai (250 mm, 400 mm)
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
import img1 from './../../assets/img/iranga/komplektas.jpg'
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
      images: [img1]
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
