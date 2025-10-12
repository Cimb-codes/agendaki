<template>
    <section class="p-d-flex p-jc-center p-ai-center p-flex-column p-p-6 cta-section" data-aos="zoom-in">
        <h2 class="p-text-bold">Pronto para transformar seu agendamento?</h2>
        <ButtonPrimary label="Comece Agora" @click="goToLogin" class="p-mt-4" />
    </section>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
function goToLogin() {
    router.push('/login')
}
</script>

<style scoped>
.cta-section {
    background: #412A74;
    color: white;
}
</style>
