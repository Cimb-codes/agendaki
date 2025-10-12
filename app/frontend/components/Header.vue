<template>
    <header class="p-d-flex p-ai-center p-jc-between p-p-3 p-shadow-2" style="background:#fff;">
        <h1 class="p-text-bold" style="color:#412A74;">Agendaki</h1>
        <nav>
            <Button label="Login" @click="goToLogin" class="p-button-text" />
        </nav>
    </header>
</template>

<script setup>
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
const router = useRouter()
function goToLogin() {
    router.push('/login')
}
</script>
