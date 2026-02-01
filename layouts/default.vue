<template>
  <div>
    <Header v-if="showChrome" />
    <transition name="slide-left">
      <nuxt />
    </transition>
    <Footer v-if="showChrome" />
    <Cookies v-if="showChrome" />
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
  },
  computed: {
    showChrome () {
      const path = this.$route.path || ''
      return path !== '/de' && path !== '/de/'
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: "Open Sans", sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #5c6173;
}
body {
  font-size: 1.6rem;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
h1,
h2,
h3,
h4 {
  color: #3a425d;
}
.container {
  max-width: 1140px;
  @apply mx-auto px-4;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  max-width: 30rem;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(180.76deg, #1a9cfc 6.4%, #1a9cfc 96.45%);
  color: white;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  &--short {
    @media (max-width: 768px) {
      height: 4rem;
    }
  }
  &:hover {
    padding-left: 0.2rem;
  }
}
@responsive {
  .text-20 {
    font-size: 2rem;
  }
  .text-25 {
    font-size: 2.5rem;
  }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(-2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(2em, 0);
}
</style>
