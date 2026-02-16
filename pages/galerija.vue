<template>
  <div>
    <section class="bg py-12 md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-white font-semibold text-4xl md:text-5xl mb-2 md:mb-4">
            Atliktų darbų galerija
          </h1>
          <p class="text-white md:text-2xl">
            Profesionaliai atliekamos paslaugos
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <Gallery
          :separate-page="true"
        />
      </div>
    </section>

    <Banner />
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Gallery,
    Banner
  }
}
</script>

<style>

</style>
