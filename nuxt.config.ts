// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  future: {
    compatibilityVersion : 5,
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  image:{
    domains: ['https://dummyjson.com/recipes'],
  },

  googleFonts:{
    families: {
      Montserrat: true,
    },
  },
})