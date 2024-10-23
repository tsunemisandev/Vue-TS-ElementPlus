// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['element-plus/dist/index.css'],
  plugins: ['~/plugins/element-plus.js'],
})
