<template>
  <a
    v-if="isExternal || isMachineTranslated"
    :href="to"
    :class="className"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    :to="to"
    :class="className"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    isMachineTranslated () {
      if (typeof window === 'undefined') { return false }
      return (window.__em_translate_lang__ || 'lt') !== 'lt'
    },
    isExternal () {
      return /^https?:\/\//i.test(this.to)
    }
  }
}
</script>
