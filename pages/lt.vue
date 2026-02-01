<template>
  <IndustryLanding :config="landingConfig" />
</template>

<script>
import IndustryLanding from '~/components/IndustryLanding.vue'
import ltConfig from '~/js/landingIndustry/lt'

export default {
  components: {
    IndustryLanding
  },
  layout: 'landing',
  data () {
    return {
      landingConfig: ltConfig
    }
  },
  head () {
    const seo = this.landingConfig.seo || {}
    return {
      title: seo.title,
      meta: [
        { hid: 'description', name: 'description', content: seo.description },
        { hid: 'keywords', name: 'keywords', content: seo.keywords },
        { hid: 'og:title', property: 'og:title', content: seo.title },
        { hid: 'og:description', property: 'og:description', content: seo.description }
      ],
      link: seo.canonical
        ? [{ rel: 'canonical', href: seo.canonical }]
        : []
    }
  }
}
</script>

