<template>
    <Button :label="label" class="p-button-raised p-button-lg" style="background:#412A74; border:none; color:white;"
        v-bind="$attrs" />
</template>

<script setup>
import Button from 'primevue/button'
const props = defineProps({
    label: String
})
</script>
