<template>
  <ClientOnly>
    <VueEasyLightbox
      :visible="visible"
      :imgs="imgs"
      :index="safeIndex"
      @hide="onHide"
    />
  </ClientOnly>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  name: 'CoolLightBox',
  components: {
    VueEasyLightbox
  },
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    index: {
      type: Number,
      default: null
    }
  },
  computed: {
    visible () {
      return this.index !== null
    },
    safeIndex () {
      return typeof this.index === 'number' ? this.index : 0
    },
    imgs () {
      return (this.items || [])
        .map((item) => {
          if (typeof item === 'string') { return item }
          if (item && typeof item === 'object') {
            return item.src || item.url || item.href || item.thumb || ''
          }
          return ''
        })
        .filter(Boolean)
    }
  },
  methods: {
    onHide () {
      this.$emit('close')
    }
  }
}
</script>
