
export default {
  serverMiddleware: [
    { path: '/api/contact', handler: '~/api/contact' },
  ],
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'EM Ortakių Valymas ⋆ Gartraukių, ventiliatorių, kaminų, šachtų valymas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dulkių ir dervų. Gyvenamųjų namų ventiliacijos kanalų (šachtų) valymas.' },
      { hid: 'og:title', property: 'og:title', content: 'EM Ortakių Valymas ⋆ Gartraukių, ventiliatorių, kaminų, šachtų valymas' },
      { hid: 'og:description', property: 'og:description', content: 'Ortakių, gartraukių, ventiliatorių valymas nuo riebalų (prikepusių, skystų), dulkių ir dervų. Gyvenamųjų namų ventiliacijos kanalų (šachtų) valymas.' },
      { hid: 'og:image', property: 'og:image', content: 'https://emortakiuvalymas.lt/_nuxt/img/1366eea.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/cool-lightbox', ssr: true },
    { src: '~/plugins/vuelidate', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  sitemap: {
    hostname: 'https://emortakiuvalymas.lt',
    gzip: true
  }
}
