<template>
  <div>
    <Header />
    <slot />
    <Footer />
    <Cookies />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Cookies from '~/components/Cookies.vue'
export default {
  components: {
    Header,
    Footer,
    Cookies
  }
}
</script>

<style></style>
