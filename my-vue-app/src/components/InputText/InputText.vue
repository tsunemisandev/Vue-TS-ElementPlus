<!-- input-text.vue -->
<template>
    <input ref="input" type="text" v-model="model" />
  </template>
  
  <script setup lang="ts">
  import { ref, defineExpose } from 'vue';
  const model = defineModel()

  const input = ref(null);
  defineExpose({ input });
  </script>
  