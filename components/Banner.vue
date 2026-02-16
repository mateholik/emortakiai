<template>
  <section class="bg-blue-custom py-12 md:py-16">
    <div class="container">
      <div class="md:flex justify-between items-center">
        <p class="text-center md:text-left text-white text-3xl mb-10 md:mb-0 md:text-4xl">
          Ieškote kas atliktų ortakių, kaminų valymo paslaugas? Susisiekime.
        </p>
        <div class="md:max-w-xs w-full">
          <nuxt-link to="/kontaktai" class="btn btn--short border-2 border-white">
            Siųsti žinutę »
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>

</style>
