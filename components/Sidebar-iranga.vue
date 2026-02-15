<template>
  <div class="sidebar lg:max-w-xl w-full pt-12 lg:pt-0">
    <h3 class="font-semibold text-3xl md:text-4xl block lg:hidden mb-8">
      Įranga:
    </h3>
    <NuxtLink to="/iranga/rotaciniai-lankstus-velenai" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Rotaciniai-lankstūs velenai
    </NuxtLink>

    <NuxtLink to="/iranga/sepetines-masinos" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Šepetinės mašinos
    </NuxtLink>

    <NuxtLink to="/iranga/video-foto-inspektavimo-robotas" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Video, foto ispektavimo robotas
    </NuxtLink>

    <NuxtLink to="/iranga/mobilios-dulkiu-surinkimo-masinos" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Mobilios dulkių surinkimo mašinos
    </NuxtLink>

    <NuxtLink to="/iranga/sepeciai-centravimo-diskai" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Šepečiai ir centravimo diskai
    </NuxtLink>
    <NuxtLink to="/iranga/optimalus-ortakiu-valymo-komplektas" class="flex items-center mb-8">
      <img src="~/assets/img/check-icon.svg" alt="check" class="mr-6 w-8 md:w-12">
      Optimalus ortakių valymo komplektas
    </NuxtLink>
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
    .nuxt-link-active,
    .nuxt-link-exact-active,
    .router-link-active,
    .router-link-exact-active {
      background: none;
      box-shadow: none;
      position: relative;
      color: unset;
      &:after {
        content: "";
        display: block;
        height: 2px;
        position: absolute;
        left: 0;
        background: #333C57;
        box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.11);
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
