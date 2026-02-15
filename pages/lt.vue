<template>
  <IndustryLanding :config="landingConfig" />
</template>

<script setup>
import IndustryLanding from '~/components/IndustryLanding.vue'
import ltConfig from '~/js/landingIndustry/lt'

definePageMeta({ layout: 'landing' })

const landingConfig = ltConfig
const seo = landingConfig.seo || {}

useHead({
  title: seo.title,
  meta: [
    { key: 'description', name: 'description', content: seo.description },
    { key: 'keywords', name: 'keywords', content: seo.keywords },
    { key: 'og:title', property: 'og:title', content: seo.title },
    { key: 'og:description', property: 'og:description', content: seo.description }
  ],
  link: seo.canonical ? [{ rel: 'canonical', href: seo.canonical }] : []
})
</script>
