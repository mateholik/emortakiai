<template>
  <div class="sidebar lg:max-w-xl w-full pt-12 lg:pt-0">
    <h3 class="font-semibold text-3xl md:text-4xl block lg:hidden mb-8">
      Paslaugos:
    </h3>
    <nuxt-link to="/paslaugos/ortakiu-gartraukiu-ventiliatoriu-valymas-nuo-riebalu" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dervų ir kt
    </nuxt-link>

    <nuxt-link to="/paslaugos/ortakiu-sistemos-ventiliatoriu-valymas-nuo-dulkiu" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Ortakių sistemos, ventiliatorių valymas nuo dulkių
    </nuxt-link>

    <nuxt-link to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-valymas" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Gyvenamųjų  namų ventiliacijos kanalų (šachtų) valymas
    </nuxt-link>

      <nuxt-link to="/paslaugos/gyvenamuju-namu-ventiliacijos-kanalu-sachtu-dezinfekcija" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Gyvenamųjų namų ventiliacijos kanalų (šachtų) dezinfekcija
    </nuxt-link>

    <nuxt-link to="/paslaugos/dumtraukiu-kaminu-valymas" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Dumtraukių (kaminų) valymas
    </nuxt-link>

    <nuxt-link to="/paslaugos/ortakiu-vedinimo-kanalu-valymo-irangos-nuoma" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
        Ortakių, vėdinimo kanalų valymo įrangos nuoma
    </nuxt-link>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  .sidebar {
    .nuxt-link-active {
      background: none;
      box-shadow: none;
      position: relative;
      color: unset;
      &:after {
        bottom: -1rem;
        width: 50%;
      }
    }
    a {
      &:hover {
        padding-left: 0.2rem;
      }
    }
  }
</style>
