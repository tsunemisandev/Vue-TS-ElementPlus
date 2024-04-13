<template>
    <div>
        Label
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { provide, useAttrs } from 'vue';

    const props = defineProps({
        tipId: {type: String, default: undefined}
    })
    provide('tip-id', props.tipId)
</script>

<style scoped>

</style>