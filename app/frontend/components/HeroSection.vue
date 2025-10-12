<template>
    <section class="p-d-flex p-jc-center p-ai-center p-flex-column p-text-center p-p-6 hero-section" data-aos="fade-up">
        <h1 class="p-text-bold hero-title">Bem-vindo ao Agendaki 🚀</h1>
        <p class="hero-subtitle">
            Sistema de agendamento moderno e personalizável para sua empresa.
        </p>
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
.hero-section {
    background: linear-gradient(135deg, #412A74, #6A4FB1);
    color: white;
}

.hero-title {
    font-size: 3rem;
}

.hero-subtitle {
    font-size: 1.3rem;
    max-width: 600px;
}
</style>
