export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000/api',
    },
  },
  css: [
    '@/assets/styles/main.scss',
    'aos/dist/aos.css',
    '@/assets/styles/global.scss'
  ],
  plugins: [
    '~/plugins/primevue.ts',
    '~/plugins/axios.ts',
    '~/plugins/aos.ts'
  ],
  compatibilityDate: '2025-10-05'
})
