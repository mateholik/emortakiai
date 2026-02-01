<template>
  <div>
    <section class="bg py-12 md:pt-16 md:pb-20">
      <div class="container">
        <div class="text-center">
          <h1 class="text-white font-semibold text-4xl md:text-5xl">
            Paslaugos
          </h1>
          <p class="text-white md:text-2xl">
            Profesionaliai atliekamos paslaugos
          </p>
        </div>
      </div>
    </section>

    <main class="pt-8 md:pt-24 pb-8">
      <div class="container">
        <div class="lg:flex">
          <div class="flex-1 lg:pr-16">
            <h1 class="mb-10 font-semibold text-3xl md:text-5xl">
              Gyvenamųjų namų ventiliacijos kanalų (šachtų) valymas
            </h1>
            <p class="mb-12">
              Vedinimo sistemos efektyvumas priklauso nuo jos užterštumo lygio.  Ant stogo, per ventiliacijos kanalų (šachtų) kaminelius vyksta valymo procesas (nuo dulkių, voratinklių, paukščių lizdų, statybinių šiukšlių ir kt.).
            </p>
            <h1 class="mb-10 font-semibold text-3xl md:text-5xl">
              Valymo eiga:
            </h1>
            <ul class="mb-24 list-disc pl-8">
              <li class="mb-4">
                Darbo vietos paruošimas
              </li>
              <li class="mb-4">
                Oro srauto matavimai
              </li>
              <li class="mb-4">
                Ventiliacijos kanalų (šachtų) analizė, užterštumo įvertinimas, darbų vykdymo plano sudarymas
              </li>
              <li class="mb-4">
                Foto inspekcija prieš atliekant valymo darbus
              </li>
              <li class="mb-4">
                Valymo procesas lankstaus veleno pagalba sų įvairaus tvirtumo besisukančiais šepečiais naudojant vakuminius siurblius ir kt.
              </li>
              <li class="mb-4">
                Foto inspekcija (atliktų valymo darbų efektyvumo bei rezultatų įvertinimas)
              </li>

              <li class="mb-4">
                Ventiliacinių grotelių keitimas WC, vonioje, virtuvėje (pagal galimybę)
              </li>
              <li class="mb-4">
                Oro srauto matavimai
              </li>
              <li class="mb-4">
                Darbo vietos sutvarkymas
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
