<script setup>
import CardCusto from '../components/CardCustom.vue'
</script>
<template>
    <section class="p-d-flex p-flex-wrap p-jc-center p-p-6 features-section">
        <CardCusto icon="pi pi-clock" title="Agendamento Inteligente"
            description="Organize seus compromissos de forma fácil e intuitiva." />
        <CardCusto icon="pi pi-users" title="Gestão de Clientes"
            description="Tenha controle total dos seus clientes em um único lugar." />
        <CardCusto icon="pi pi-chart-line" title="Relatórios"
            description="Dados completos para melhorar sua performance." />
    </section>
</template>
