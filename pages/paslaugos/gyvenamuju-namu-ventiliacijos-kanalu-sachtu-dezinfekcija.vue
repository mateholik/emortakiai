<template>
  <div>
    <section class="bg py-12 md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-white font-semibold text-4xl md:text-5xl">
            Paslaugos
          </h1>
        </div>
      </div>
    </section>

    <main class="pt-8 md:pt-24 pb-8">
      <div class="container">
        <div class="lg:flex">
          <div class="flex-1 lg:pr-16">
            <h1 class="mb-10 font-semibold text-3xl md:text-5xl">
              Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
            </h1>
            <p class="py-8">
              Esame licencijuota įmonė pagal VASPVT (valstybinė akreditavimo sveikatos priežiūros veiklai tarnyba prie Sveikatos apsaugos ministerijos)
            </p>
            <div>
              <Gallery :paveiksliukai="images" />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </main>

    <Banner />
  </div>
</template>

<script>
import img from './../../assets/img/licencija.png'
import Sidebar from '~/components/Sidebar.vue'
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
      images: [img]
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
  background: linear-gradient(180.52deg, #1a9cfc 6.4%, #1a9cfc 96.45%);
}
.pb-1\/2 {
  padding-bottom: 57%;
}
</style>
