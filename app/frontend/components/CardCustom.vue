<template>
    <div class="p-card p-m-3" style="width:300px; border-radius:12px;" data-aos="fade-up">
        <div class="p-d-flex p-jc-center p-ai-center p-mb-3">
            <i :class="icon" style="font-size:2rem; color:#412A74;"></i>
        </div>
        <h3 class="p-text-bold">{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    icon: String,
    title: String,
    description: String
})
</script>
