<script setup>
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

definePageMeta({ layout: false })



const form = ref({
    email: '',
    password: ''
})

const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
    loading.value = true
    error.value = ''

    try {
        const result = await login(form.value.email, form.value.password)

        if (result.success) {
            await navigateTo('/dashboard')
        } else {
            error.value = result.message || 'Erro ao fazer login'
        }
    } catch (err) {
        error.value = 'Erro interno do servidor'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="login-wrapper flex min-h-screen">

        <!-- Lado esquerdo verde com ilustração / slogan -->
        <div class="login-side-left flex flex-column align-items-center justify-content-center p-6">
            <img src="../assets/images/logos/logo.png" alt="Agendaki" class="h-5rem mb-4" />
            <h1 class="text-white text-3xl font-bold mb-2">Agendaki</h1>
            <p class="text-white text-lg text-center">
                Organize seus agendamentos de forma simples, rápida e moderna.
            </p>
            <!-- Aqui você pode colocar uma ilustração SVG ou imagem -->
            <img src="../assets/images/logos/Logo_footer.png" alt="Agendamento" class="illustration mt-6" />
        </div>

        <!-- Lado direito com formulário -->
        <div
            class="login-side-right flex align-items-center justify-content-center p-6 w-full sm:w-6 md:w-4 lg:w-3 surface-card border-round shadow-3">
            <form @submit.prevent="handleLogin" class="flex flex-column gap-4 w-full">

                <h2 class="text-title text-2xl font-bold mb-2 text-center">Bem-vindo ao Agendaki</h2>
                <p class="text-text text-sm text-center mb-4">Entre para gerenciar seus agendamentos</p>

                <div class="flex flex-column gap-2">
                    <label for="email" class="text-text font-medium text-sm">E-mail</label>
                    <InputText id="email" v-model="form.email" type="email" placeholder="exemplo@email.com"
                        class="w-full" required />
                </div>

                <div class="flex flex-column gap-2">
                    <label for="password" class="text-text font-medium text-sm">Senha</label>
                    <Password id="password" v-model="form.password" :feedback="false" toggleMask placeholder="••••••••"
                        inputClass="w-full" required />
                </div>

                <div v-if="error" class="text-red-500 text-sm text-center">{{ error }}</div>

                <Button type="submit" :label="loading ? 'Entrando...' : 'Entrar'" :disabled="loading"
                    class="w-full  text-white font-semibold py-3 border-round" />

                <p class="text-text text-sm text-center mt-4">
                    Ainda não tem uma conta?
                    <NuxtLink to="/cadastro" class="text-primary font-medium no-underline hover:underline">
                        Cadastre-se
                    </NuxtLink>
                </p>
            </form>
        </div>

    </div>
</template>

<style scoped>
/* 🎨 Cores Agendaki */
:root {
    --primary-color: #7AAE25;
    --primary-color-hover: #9FCC3D;
    --text-color: #282828;
    --title-color: #000000;
}

/* Wrapper dividido */
.login-wrapper {
    flex-direction: row;
}

.login-side-left {
    flex: 1;
    background: linear-gradient(115deg, #7AAE25, #282828);
    color: white;
    min-height: 100vh;
}

.login-side-left .illustration {
    max-width: 80%;
}

/* Lado direito */
.login-side-right {
    flex: 1;
    min-height: 100vh;
}

/* Textos */
.text-text {
    color: var(--text-color);
}

.text-title {
    color: var(--title-color);
}

/* Botão */
.bg-primary {
    background-color: var(--primary-color) !important;
}

.bg-primary:hover {
    background-color: var(--primary-color-hover) !important;
}

/* Inputs PrimeVue */
.p-inputtext,
.p-password input {
    border-radius: 6px;
    padding: 0.75rem;
    border: 1px solid #dcdcdc;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.p-inputtext:focus,
.p-password input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 1px var(--primary-color);
}

.p-password .p-password-toggle-icon {
    color: var(--primary-color);
}

/* Responsividade */
@media screen and (max-width: 1024px) {
    .login-wrapper {
        flex-direction: column;
    }

    .login-side-left,
    .login-side-right {
        width: 100%;
        min-height: auto;
    }

    .login-side-left {
        padding: 4rem 2rem;
    }

    .login-side-right {
        padding: 2rem;
        margin-top: -2rem;
    }
}
</style>
