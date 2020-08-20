<template>
  <div>
    <section class="bg py-12">
      <div class="container">
        <div class="text-center">
          <div class="mb-4">
            <img class="h-32 w-32 mx-auto" src="~/assets/img/iranga/logo partnerio.png" alt="partner logo">
          </div>
          <p class="text-white md:text-2xl">
            Profesionali įranga
          </p>
        </div>
      </div>
    </section>

    <main class="pt-8 md:pt-24 pb-8">
      <div class="container">
        <div class="lg:flex">
          <div class="flex-1 lg:pr-16">
            <h1 class="mb-10 font-semibold text-3xl md:text-5xl">
              Šepetinės mašinos
              </h1>
            <div class="mb-8">
              <video controls>
                <source src="~/assets/video/sepetine-masina-1.mp4" type="video/mp4">
              </video>
            </div>
            <div class="mb-8">
              <video controls>
                <source src="~/assets/video/sepetine-masina-2.mp4" type="video/mp4">
              </video>
            </div>
            <h2 class="mb-10 font-semibold text-3xl md:text4xl">
              Šepetinė mašina S
            </h2>
            <div>
              <Gallery
                :paveiksliukai="masina_s"
              />
            </div>
            <div class="pb-10">
              <a href="tel:+37067619114" class="btn max-w-xs" style="margin-left: 0; height: 4rem;">
                Skambinti dėl kainos »
              </a>
            </div>
            <p class="mb-12">
              <strong>Paskirtis:</strong> ventiliacijos kanalų, ortakių valymas.
            </p>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Techniniai duomenys:
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Leidžiamas maksimalus lankstus veleno ilgis iki 20 m
              </li>
              <li class="mb-4">
                Rekomenduojamas veleno ilgis 12 m
              </li>
              <li class="mb-4">
                Maksimalus naudojamo šepečio diametras 600 mm
              </li>
              <li class="mb-4">
                Valymo mašina yra patogioje, patvarioje, hermetiškoje dėžėje.
              </li>
              <li class="mb-4">
                Veikimo tipas: variklis-reduktorius
              </li>
              <li class="mb-4">
                Valdymas: pedalo pagalba
              </li>
              <li class="mb-4">
                Darbinė įtampa: 220 voltų
              </li>
              <li class="mb-4">
                Darbinis dažnis: 50 Hz
              </li>
              <li class="mb-4">
                Variklio galia: 785 W
              </li>
              <li class="mb-4">
                Darbinė srovė (pirminė):  3,5 A
              </li>
              <li class="mb-4">
                Dvi sukimosi kryptys
              </li>
              <li class="mb-4">
                Sukimosi greitis 40 - 600 aps./min
              </li>
              <li class="mb-4">
                Šepečio jungtis: M12
              </li>
              <li class="mb-4">
                Ilgis: 365 mm
              </li>
              <li class="mb-4">
                Plotis :420 mm
              </li>
              <li class="mb-4">
                Aukštis: 200 mm
              </li>
              <li class="mb-4">
                Svoris: 16 kg
              </li>
            </ul>
<!--            niu-->
            <h2 class="mb-10 font-semibold text-3xl md:text4xl">
              Šepetinė mašina L
            </h2>
            <div>
              <Gallery
                :paveiksliukai="masina_l"
              />
            </div>
            <div class="pb-10">
              <a href="tel:+37067619114" class="btn max-w-xs" style="margin-left: 0; height: 4rem;">
                Skambinti dėl kainos »
              </a>
            </div>
            <p class="mb-12">
              <strong>Paskirtis:</strong> entiliacijos kanalų, ortakių valymas.
            </p>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Techniniai duomenys:
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Darbinė įtampa: 1 ~ 220 voltų
              </li>
              <li class="mb-4">
                Naudojamo šepečio diametras 100  - 800 mm
              </li>
              <li class="mb-4">
                Sukimo momentas perduodamas per lankstų veleną į šepetį.
              </li>
              <li class="mb-4">
                Elektrinis variklis
              </li>
              <li class="mb-4">
                Velenas susisuka ant rato
              </li>
              <li class="mb-4">
                Galia: 785 W
              </li>
              <li class="mb-4">
                Darbinis dažnis: 50 Hz
              </li>
              <li class="mb-4">
                Darbinių srovių panaudojimo diapazonas: 0,2 - 5 A
              </li>
              <li class="mb-4">
                Šepečių sukimosi greitis: 0 – 1500 aps./min
              </li>
              <li class="mb-4">
                Dvipusė sukimosi kryptis
              </li>
              <li class="mb-4">
                Valdymas pedalo pagalba
              </li>
              <li class="mb-4">
                Šepečio jungtis: M12
              </li>
              <li class="mb-4">
                Nerūdijančio plieno rėmas
              </li>
              <li class="mb-4">
                Ilgis: 800 mm
              </li>
              <li class="mb-4">
                Plotis: 350 mm
              </li>
              <li class="mb-4">
                Auštis: 870 mm
              </li>
              <li class="mb-4">
                Svoris: 36 kg
              </li>
            </ul>

            <!--            niu-->
            <h2 class="mb-10 font-semibold text-3xl md:text4xl">
              Šepetinė mašina XL (Pneumatinė)
            </h2>
            <div>
              <Gallery
                :paveiksliukai="masina_xl"
              />
            </div>
            <div class="pb-10">
              <a href="tel:+37067619114" class="btn max-w-xs" style="margin-left: 0; height: 4rem;">
                Skambinti dėl kainos »
              </a>
            </div>
            <p class="mb-12">
              <strong>Paskirtis:</strong> entiliacijos kanalų, ortakių valymas.
            </p>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Techniniai duomenys:
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Veleno ilgis: 40 m
              </li>
              <li class="mb-4">
                Naudojamo šepečio diametras 300  - 1200 mm
              </li>
              <li class="mb-4">
                Veikimas: pneumatinis
              </li>
              <li class="mb-4">
                Galia 200 vatų
              </li>
              <li class="mb-4">
                Šepečių sukimosi greitis: 0 – 700 aps./min
              </li>
              <li class="mb-4">
                Gabaritai: 1161х407х1273 мм
              </li>
              <li class="mb-4">
                Svoris 43 kg
              </li>
              <li class="mb-4">
                Nerūdijančio plieno rėmas
              </li>
            </ul>

          </div>
          <Sidebar />
        </div>
      </div>
    </main>

    <Banner />
  </div>
</template>

<script>
import s1 from './../../assets/img/iranga/sepetine masina s 1.jpg'
import s2 from './../../assets/img/iranga/sepetine masina s 2.jpg'
import s3 from './../../assets/img/iranga/sepetine masina s 3.jpg'
import l1 from './../../assets/img/iranga/sepetine masina L 2.jpg'
import l2 from './../../assets/img/iranga/sepetine masina L 1.jpg'
import l3 from './../../assets/img/iranga/sepetine masina L 3.jpg'
import l4 from './../../assets/img/iranga/sepetine masina L 4.jpg'
import xl1 from './../../assets/img/iranga/sepetine masina XL 1.jpg'
import xl2 from './../../assets/img/iranga/sepetine masina XL 3.jpg'
import xl3 from './../../assets/img/iranga/sepetine masina XL 4.jpg'
import Sidebar from '~/components/Sidebar-iranga.vue'
import Banner from '~/components/Banner.vue'
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    Sidebar,
    Banner,
    Gallery
  },
  data () {
    return {
      masina_s: [s1, s3, s2],
      masina_l: [l1, l2, l3, l4],
      masina_xl: [xl1, xl2, xl3]
    }
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
