<template>
  <transition
    enter-active-class="duration-200 ease-out opacity-0"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="agree === false"
      class="sticky bottom-0 left-0 z-50 w-full bg-blue-100 border-t"
    >
      <div class="container">
        <div class="items-center py-8 text-2xl md:space-x-8 md:flex">
          <div class="mb-8 md:mb-0">
            Mes naudojame slapukus, kurie užtikrina patogų svetainės naudojimą.
            Naršymas svetainėje yra tolygus sutikimui su slapukų naudojimu.
          </div>
          <div
            style=" background: linear-gradient(180.76deg, #1a9cfc 6.4%, #1a9cfc 96.45%)"
            class="inline-block px-4 py-2 text-white rounded-lg cursor-pointer"
            @click="setCookies"
          >
            Gerai
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      agree: null
    }
  },
  mounted () {
    if (localStorage.getItem('cookies')) {
      this.agree = true
    } else {
      setTimeout(() => {
        this.agree = false
      }, 1000)
    }
  },
  methods: {
    setCookies () {
      localStorage.setItem('cookies', true)
      this.agree = true
    }
  }
}
</script>

<style></style>
