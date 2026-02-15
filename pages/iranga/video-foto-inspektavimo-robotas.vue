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
              Video, foto ispektavimo robotas
            </h1>
            <div class="mb-8">
              <video controls>
                <source src="~/assets/video/robotas.mp4" type="video/mp4">
              </video>
            </div>
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
              <strong>Paskirtis:</strong> video, foto inspektavimo sistema skirta horizontaliam ortakių vidinių paviršių užterštumo įvertinimui atlikti.
            </p>

            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Techniniai duomenys:
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Kabelio ilgis - 23 m
              </li>
              <li class="mb-4">
                Komplekto svoris - 11,5 kg
              </li>
              <li class="mb-4">
                Roboto svoris - 1,5 kg
              </li>
              <li class="mb-4">
                Horizontalus matymo kampas - 80 laipsnių
              </li>
              <li class="mb-4">
                Vertikalus matymo kampas - 45 laipsnių
              </li>
              <li class="mb-4">
                Nepertraukiamo darbo laikas - 30-60 min
              </li>
              <li class="mb-4">
                Apsauga nuo dulkių ir drėgmės - IP 67
              </li>
              <li class="mb-4">
                Mažiausias tyrinėjamojo kanalo skersmuo - 160 мм
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
import img1 from './../../assets/img/iranga/Video, foto ispektavimo robotas 2.jpg'
import img2 from './../../assets/img/iranga/Video, foto ispektavimo robotas 3.jpg'
import img3 from './../../assets/img/iranga/Video, foto ispektavimo robotas 5.jpg'
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
      images: [img1, img3, img2]
    }
  }
}
</script>

<style>
  .bg {
    background: url('~/assets/img/bg.jpg');
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
