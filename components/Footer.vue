<template>
  <footer>
    <div class="py-8 md:py-20">
      <div class="container">
        <div class="justify-between text-white md:flex">
          <div class="mb-8 md:mb-0">
            <h3 class="mb-6 text-3xl font-semibold text-white">
              Navigacija
            </h3>
            <nuxt-link
              to="/apie"
              class="block mb-3 text-2xl"
            >
              Apie mus
            </nuxt-link>
            <nuxt-link
              to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu"
              class="block mb-3 text-2xl"
            >
              Paslaugos
            </nuxt-link>
            <nuxt-link
              to="/galerija"
              class="block mb-3 text-2xl"
            >
              Atliktų darbų galerija
            </nuxt-link>
          </div>
          <div>
            <div class="md:flex">
              <div class="">
                <div class="mb-8 fix md:mb-0 md:px-8">
                  <h3 class="mb-6 text-3xl font-semibold text-white">
                    Kontaktai
                  </h3>
                  <a
                    href="tel:+37067619114"
                    class="flex items-center mb-3 text-2xl"
                  >
                    <img
                      class="w-8 mr-4"
                      src="~/assets/img/phone.svg"
                      alt="phone"
                    >
                    +370 6 7619 114
                  </a>
                  <a
                    href="tel:+37060736036"
                    class="flex items-center mb-3 text-2xl"
                  >
                    <img
                      class="w-8 mr-4"
                      src="~/assets/img/phone.svg"
                      alt="phone"
                    >
                    +370 6 0736 036
                  </a>
                  <a
                    href="mailto:info@emortakiuvalymas.lt"
                    class="flex items-center mb-3 text-2xl"
                  >
                    <img
                      class="w-8 mr-4"
                      src="~/assets/img/mail.svg"
                      alt="mail"
                    >
                    info@emortakiuvalymas.lt
                  </a>
                  <a
                    href="https://www.facebook.com/emortakiuvalymas"
                    target="_blank"
                    class="flex items-center mb-3 text-2xl"
                  >
                    <img class="w-8 mr-4" src="~/assets/img/fb.svg" alt="fb">
                    Sekite mus facebook'e!
                  </a>
                </div>
              </div>
              <div class="mb-8 md:mb-0 md:px-8">
                <h3 class="mb-6 text-3xl font-semibold text-white">
                  Darbo Laikas
                </h3>
                <p>
                  I-IV: 08:00 - 19:00 <br>
                  V: 08:00 - 19:00
                </p>
              </div>
              <div class="mb-8 md:mb-0 md:px-8">
                <h3 class="mb-6 text-3xl font-semibold text-white">
                  Mus Rasite
                </h3>
                <p>
                  Vilniaus mieste <br>
                  Vilniaus miesto apskrityje
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 text-center border-t border-gray-700">
      <span
        class="text-2xl text-white text-gray-500"
      >{{ currentYear }} EM Ortakių Valymas</span>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
footer {
  background: #2f3039;
  a {
    &:hover {
      padding-left: 0.2rem;
    }
  }
  .fix {
    width: 28rem;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .nuxt-link-active {
    background: none;
    box-shadow: none;
    position: relative;
    color: gray;
    &:after {
      display: none;
    }
  }
}
</style>
