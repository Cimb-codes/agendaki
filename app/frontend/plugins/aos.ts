import AOS from 'aos'
import 'aos/dist/aos.css'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
    if (process.client) {
        AOS.init({ once: true, duration: 800 })
    }
})
