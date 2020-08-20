<template>

  <div>
    <section class="bg py-12 md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-white font-semibold text-4xl md:text-5xl">
            Kontaktai
          </h1>
          <p class="text-white md:text-2xl">
            Susisiekite su mumis
          </p>
        </div>
      </div>
    </section>
    <section class="pt-8 md:pt-24 pb-8">
      <div class="container">
        <Contacts></Contacts>
      </div>
    </section>
  </div>
</template>

<script>
import Contacts from '~/components/Contacts.vue'

export default {
  components: {
    Contacts
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
