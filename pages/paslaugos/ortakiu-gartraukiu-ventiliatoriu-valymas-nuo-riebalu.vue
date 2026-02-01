<template>
  <div>
    <section class="py-12 bg md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-4xl font-semibold text-white md:text-5xl">
            Paslaugos
          </h1>
          <p class="text-white md:text-2xl">
            Profesionaliai atliekamos paslaugos
          </p>
        </div>
      </div>
    </section>

    <main class="pt-8 pb-8 md:pt-24">
      <div class="container">
        <div class="lg:flex">
          <div class="flex-1 lg:pr-16">
            <h1 class="mb-10 text-3xl font-semibold md:text-5xl">
              Ortakių, gartraukių, ventiliatorių valymas nuo riebalų
              (prikepusių, skystų), dervų ir kt.
            </h1>
            <p class="mb-12">
              Ortakių valymas bus atliekamas naudojant specializuotus
              mechaninius irenginius, šepečius, bei riebalų skaidymui skirtas
              specializuotas chemines medžiadas (putų pavidalu). Naudojama
              <strong>Lifa Air</strong> įranga.Valymui naudojame šepetinį valymo
              metodą. Šis metodas yra vienas veiksmingiausių ortakių valymo
              būdų. Valant šiuo metodu valymo procesas yra kokybiškesnis,
              veiksmingesnis bei greitesnis. Nereikia demontuoti (ardyti)
              ortakių bei stabdyti gamybos procesų, kas yra labai svarbu
              klientams.
            </p>

            <div class="mb-8">
              <video controls preload="metadata">
                <source src="~/assets/video/paslaugos-1.mp4" type="video/mp4">
              </video>
            </div>
            <h1 class="mb-10 text-3xl font-semibold md:text-5xl">
              Valymo eiga:
            </h1>
            <ul class="pl-8 mb-24 list-disc">
              <li class="mb-4">
                Darbo vietos paruošimas
              </li>
              <li class="mb-4">
                Ortakių sistemos analizė, užterštumo įvertinimas, darbų vykdymo
                plano sudarymas
              </li>
              <li class="mb-4">
                Foto inspekcija prieš atliekant valymo darbus
              </li>
              <li class="mb-4">
                Valymo procesas su šepetine mašina naudojant specializuotas
                chemines medžiagas (putų pavidalu) riebalų skaidymui
              </li>
              <li class="mb-4">
                Foto inspekcija (atliktų valymo darbų efektyvumo bei rezultatų
                įvertinimas)
              </li>
              <li class="mb-4">
                Darbo vietos sutvarkymas, ventiliacinių mechanizmų veikimo
                patikrinimas.
              </li>
            </ul>
            <div class="relative w-full mb-8 pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-sVP_J-m3e0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div class="relative w-full mb-8 pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/LRiw6XoTe1o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div class="relative w-full mb-8 pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bYNVJLSIqIc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div class="relative w-full mb-8 pb-1/2">
              <iframe
                class="absolute w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uX0xlv9oHG4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </main>

    <Banner />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Sidebar,
    Banner
  }
}
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
