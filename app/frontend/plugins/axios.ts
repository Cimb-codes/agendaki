import axios, { type AxiosInstance } from 'axios'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const apiBase = config.public.apiBase as string // força tipo string

    const api: AxiosInstance = axios.create({
        baseURL: apiBase || 'http://localhost:8000/api',
    })

    return {
        provide: {
            axios: api
        }
    }
})
