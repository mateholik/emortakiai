<template>
  <div>
    <section class="bg py-12 md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-white font-semibold text-4xl md:text-5xl mb-2 md:mb-4">
            Paslaugos
          </h1>
          <p class="text-white md:text-2xl">
            Profesionaliai atliekamos paslaugos
          </p>
        </div>
      </div>
    </section>

    <main class="pt-8 md:pt-24 pb-8">
      <div class="container">
        <div class="lg:flex">
          <div class="flex-1 lg:pr-16">
            <h1 class="mb-10 font-semibold text-3xl md:text-5xl">
              Ortakių, vėdinimo kanalų valymo įrangos nuoma
            </h1>

            <div class="mb-8 md:mb-12">
              <a href="tel:+37067619114" class="btn max-w-xs mygtuks">Skambinti</a>
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
import Sidebar from '~/components/Sidebar.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Sidebar,
    Banner
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
  .mygtuks {
    margin-left: 0;
  }
</style>
