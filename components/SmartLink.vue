<template>
  <component
    :is="tag"
    v-bind="bindProps"
    :class="className"
  >
    <slot />
  </component>
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
      if (!process.client) { return false }
      return (window.__em_translate_lang__ || 'lt') !== 'lt'
    },
    isExternal () {
      return /^https?:\/\//i.test(this.to)
    },
    tag () {
      if (this.isExternal) { return 'a' }
      return this.isMachineTranslated ? 'a' : 'nuxt-link'
    },
    bindProps () {
      if (this.tag === 'a') {
        return { href: this.to }
      }
      return { to: this.to }
    }
  }
}
</script>
