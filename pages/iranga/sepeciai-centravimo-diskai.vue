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
              Šepečiai ir centravimo diskai
            </h1>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Šepečiai
            </h3>
            <div>
              <Gallery
                :paveiksliukai="sepeciai"
              />
            </div>
            <div class="pb-10">
              <a href="tel:+37067619114" class="btn max-w-xs" style="margin-left: 0; height: 4rem;">
                Skambinti dėl kainos »
              </a>
            </div>
            <p class="mb-12">
              <strong>Paskirtis:</strong> ortakių, kaminų, ventiliacinių šachtų vidaus paviršių valymas. Platus šepečių asortimentas.
            </p>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Tipai:
            </h3>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Metaliniai 160 - 800 mm (skirti valyti suodžius ir riebalus) Jungtis.
                <br>
                <div class="max-w-xs md:max-w-xl w-full">
                  <Gallery
                    :paveiksliukai="sepetys1"
                  />
                </div>
              </li>
              <li class="mb-4">
                Kombinuoti 150/350 – 700/900 mm (skirti valyti dulkėms).
                <br>
                <div class="max-w-xs md:max-w-xl w-full">
                  <Gallery
                    :paveiksliukai="sepetys2"
                  />
                </div>
              </li>
              <li class="mb-4">
                Agresyvus 200 – 1000 mm (skirti dulkėms ir teršalams valyti). Jungtis M12
                <br>
                <div class="max-w-xs md:max-w-xl w-full">
                  <Gallery
                    :paveiksliukai="sepetys3"
                  />
                </div>
              </li>
              <li class="mb-4">
                Baziniai 100 – 800 mm (skirti dulkių valymui).
                <br>
                <div class="max-w-xs md:max-w-xl w-full">
                  <Gallery
                    :paveiksliukai="sepetys4"
                  />
                </div>
              </li>
              <li class="mb-4">
                Minkšti 100 – 1000 mm (skirti lengvam dulkių valymui) Jungtis M12
                <br>
                <div class="max-w-xs md:max-w-xl w-full">
                  <Gallery
                    :paveiksliukai="sepetys5"
                  />
                </div>
              </li>
            </ul>
            <p><strong>Pastaba: </strong> šepečius galima pagaminti pagal individualius kliento poreikius</p>
            <br>
            <h3 class="mb-10 font-semibold text-3xl md:text4xl">
              Сentravimo diskai
            </h3>
            <div class="max-w-xs md:max-w-xl w-full">
              <Gallery
                :paveiksliukai="diskas"
              />
            </div>
            <div class="pb-10">
              <a href="tel:+37067619114" class="btn max-w-xs" style="margin-left: 0; height: 4rem;">
                Skambinti dėl kainos »
              </a>
            </div>
            <p class="mb-12">
              <strong>Paskirtis:</strong> naudojami karu su šepetinėmis mašinomis ir lanksčiais velenais. Sumažina apkrovą velenui ir padeda centruoti šepetį ortakyje. Pagaminti iš plastiko. Jungtis M12.
            </p>

            <p class="mb-12">
              <strong>Diametrai:</strong> 150 - 400 mm
            </p>
          </div>
          <Sidebar />
        </div>
      </div>
    </main>

    <Banner />
  </div>
</template>

<script>
import sepeciai from './../../assets/img/iranga/sepeciai.jpg'
import sepetys1 from './../../assets/img/iranga/sepetys1.jpg'
import sepetys2 from './../../assets/img/iranga/sepetys2.jpg'
import sepetys3 from './../../assets/img/iranga/sepetys3.jpg'
import sepetys4 from './../../assets/img/iranga/sepetys4.jpg'
import sepetys5 from './../../assets/img/iranga/sepetys5.jpg'
import diskas from './../../assets/img/iranga/centravimo diskas.jpg'
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
      sepeciai: [sepeciai],
      sepetys1: [sepetys1],
      sepetys2: [sepetys2],
      sepetys3: [sepetys3],
      sepetys4: [sepetys4],
      sepetys5: [sepetys5],
      diskas: [diskas]
    }
  }
}
</script>

<style>
  .bg {
    background: url('~/assets/img/bg.jpg');
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
