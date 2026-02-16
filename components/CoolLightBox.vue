<template>
  <ClientOnly>
    <VueEasyLightbox
      :visible="visible"
      :imgs="imgs"
      :index="internalIndex"
      :mask-closable="true"
      :scroll-disabled="true"
      :swipe-tolerance="30"
      :move-disabled="true"
      :rotate-disabled="true"
      :zoom-disabled="true"
      :pinch-disabled="true"
      :dblclick-disabled="true"
      teleport="body"
      @hide="onHide"
      @on-index-change="onIndexChange"
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
      type: [Number, Object],
      default: null
    }
  },
  computed: {
    visible () {
      return this.index !== null
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
  data () {
    return {
      internalIndex: 0
    }
  },
  mounted () {
    this.syncFromProp()
  },
  watch: {
    index () {
      this.syncFromProp()
    },
    visible () {
      this.syncFromProp()
    }
  },
  methods: {
    syncFromProp () {
      if (!this.visible) {
        this.internalIndex = 0
        return
      }
      if (typeof this.index === 'number' && Number.isFinite(this.index)) {
        this.internalIndex = this.index
      }
    },
    onHide () {
      this.$emit('close')
    },
    onIndexChange (oldIndex, newIndex) {
      if (typeof newIndex === 'number' && Number.isFinite(newIndex)) {
        this.internalIndex = newIndex
      }
    }
  }
}
</script>
