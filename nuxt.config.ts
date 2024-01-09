// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  image: {
    dir: 'assets/images'
  },
  modules: ["@nuxt/image"]
});