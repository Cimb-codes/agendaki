import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
// Import estilos principais
import 'primevue/resources/themes/saga-blue/theme.css' // tema PrimeVue
import 'primevue/resources/primevue.min.css' // estilos básicos PrimeVue
import 'primeicons/primeicons.css' // ícones PrimeIcons
import 'primeflex/primeflex.css' // PrimeFlex

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Card', Card)
})
