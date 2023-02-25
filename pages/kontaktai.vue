<template>
  <div>
    <section class="py-12 bg md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-4xl font-semibold text-white md:text-5xl">
            Kontaktai
          </h1>
          <p class="text-white md:text-2xl">
            Susisiekite su mumis
          </p>
        </div>
      </div>
    </section>
    <section class="py-8 md:py-16">
      <div class="container">
        <Contacts></Contacts>
      </div>
    </section>
  </div>
</template>

<script>
import Contacts from "~/components/Contacts.vue";

export default {
  components: {
    Contacts
  }
};
</script>

<style>
.bg {
  background: url("~assets/img/bg.jpg");
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
