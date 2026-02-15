<template>
  <div>
    <transition name="slide-left" mode="out-in">
      <NuxtPage />
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/css/layout-base.scss';
</style>
