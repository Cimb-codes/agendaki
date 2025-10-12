<template>
    <footer class="p-d-flex p-jc-center p-ai-center p-p-3" style="background:#f1f1f1;">
        <p>&copy; {{ year }} Agendaki. Todos os direitos reservados.</p>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
