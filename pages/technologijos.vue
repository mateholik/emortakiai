<template>
  <div>
    <section class="bg py-12 md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-white font-semibold text-4xl md:text-5xl">
            Technologijos
          </h1>
          <p class="text-white md:text-2xl">
            Mes naudojame šias technologijas
          </p>
        </div>
      </div>
    </section>

    <main class="pt-8 md:pt-24 pb-8">
      <div class="container">
        <div class="lg:flex">
          <div class="flex-1 lg:pr-16">
            <div class="relative mb-8 w-full pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-sVP_J-m3e0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>

            <div class="relative mb-8 w-full pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/LRiw6XoTe1o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>

            <div class="relative mb-8 w-full pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bYNVJLSIqIc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div class="relative mb-8 w-full pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xPmtqvo_Mx4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>

            <div class="relative mb-8 w-full pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/beqibOVXxD8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div class="relative mb-8 w-full pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NWjieUDys4U"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div class="relative mb-8 w-full pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uX0xlv9oHG4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div class="relative mb-8 w-full pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/w1GogPC_ooI"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
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
</style>
