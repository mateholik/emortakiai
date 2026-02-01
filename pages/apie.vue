<template>
  <div>
    <section class="bg py-12 md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-white font-semibold text-4xl md:text-5xl">
            EM Ortakių Valymas
          </h1>
          <p class="text-white md:text-2xl">
            Valymo paslaugų profesionalai
          </p>
        </div>
      </div>
    </section>

    <main class="pt-8 md:pt-24 pb-8">
      <div class="container">
        <div>
          <h1 class="mb-10 font-semibold text-3xl md:text-5xl">
            Apie mus
          </h1>
          <div class="mb-8">
            <p class="mb-4">
              <strong>Veikla:</strong> ortakių, gyvenamųjų pastatų vedinimo kanalų (šachtų) ir kaminų
              valymas.
            </p>
            <p class="mb-4">
              <strong>Veiklos teritorija</strong>: Lietuva (visi šalies regionai).
            </p>
          </div>
          <div class="mb-8">
            <p class="mb-4">
              <strong>Paslaugos:</strong>
            </p>
            <ul class="list-disc pl-8">
              <li class="mb-4">
                Ortakių sistemos, ventiliatorių valymas nuo dulkių
              </li>
              <li class="mb-4">
                Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dervų ir kt.
              </li>
              <li class="mb-4">
                Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
              </li>
              <li class="mb-4">
                Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija. Laikinai paslauga neteikiama
              </li>
              <li class="mb-4">
                Dumtraukių (kaminų) valymas
              </li>
            </ul>
          </div>
          <div class="mb-8">
            <p class="mb-4">
              <strong>Kontaktai:</strong>
            </p>
            <a href="tel:+37067619114" class="flex items-center text-2xl mb-2">
              <img class="w-8 mr-4" src="~/assets/img/phone-dark.svg" alt="phone">
              +370 6 7619 114
            </a>
            <a href="tel:+37060736036" class="flex items-center text-2xl mb-2">
              <img class="w-8 mr-4" src="~/assets/img/phone-dark.svg" alt="phone">
              +370 6 0736 036
            </a>
            <a href="mailto:info@emortakiuvalymas.lt" class="flex items-center text-2xl mb-2">
              <img class="w-8 mr-4" src="~/assets/img/mail-dark.svg" alt="mail">
              info@emortakiuvalymas.lt
            </a>
            <a href="https://www.facebook.com/emortakiuvalymas" target="_blank" class="flex items-center text-2xl mb-2">
              <img class="w-8 mr-4" src="~/assets/img/fb-dark.svg" alt="fb">
              Sekite mus facebook'e!
            </a>
          </div>
        </div>
        <!--        <div>-->
        <!--          <br>-->
        <!--          <h2 class="mb-10 font-semibold text-3xl md:text-5xl">-->
        <!--            Papildoma informacija-->
        <!--          </h2>-->
        <!--          <div>-->†
        <!--            <div class="md:mb-16" ref="frame2" />-->
        <!--            <div ref="frame1" />-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </main>

    <Banner />
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
export default {
  components: {
    Banner
  },
  mounted () {
    // const sw = screen.width
    // let pdf1
    // let pdf2
    // // console.log(sw)
    // if (sw < 768) {
    //   pdf1 = '<a href="/1.pdf" class="block py-4" target="_blank">Atsiųsti ortakių valymo prievolė.pdf</a>'
    //   pdf2 = '<a href="/2.pdf" class="block py-4" target="_blank">Atsiųsti ortakių valymas 2020 06 01.pdf</a>'
    // } else {
    //   pdf1 = '<object data="/1.pdf" class="w-10/12 mx-auto border h-iframeMob md:h-iframe" type="application/pdf">\n' +
    //     '  <embed src="/1.pdf"class="w-10/12 mx-auto border h-iframeMob md:h-iframe" type="application/pdf" />\n' +
    //     '</object>'
    //   pdf2 = '<object data="/2.pdf" class="w-10/12 mx-auto border h-iframeMob md:h-iframe" type="application/pdf">\n' +
    //     '  <embed src="/2.pdf"class="w-10/12 mx-auto border h-iframeMob md:h-iframe" type="application/pdf" />\n' +
    //     '</object>'
    // }
    // this.$refs.frame1.innerHTML = pdf1
    // this.$refs.frame2.innerHTML = pdf2
  }
}
</script>

<style lang="scss" scoped>
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
  a {
    &:hover {
      padding-left: 0.2rem;
    }
  }
  .h-80 {
    height: 60rem;
  }
</style>
