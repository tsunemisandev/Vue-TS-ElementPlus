<template>
    <input-text ref="inputNumber" v-if="isEditing" v-model="model" @blur="onBlur"></input-text>
    <input v-if="!isEditing" :value="label" @focus="onFocus">
    <p>{{ label }}</p>
  </template>
  
  <script lang="ts" setup>
  import { computed, nextTick, ref } from 'vue';
  import InputText from '../InputText/InputText.vue'; // Import the custom input-text component
  
  const model = ref("")
  const inputNumber = ref(null)
  const isEditing = ref(false)
  
  const label = computed(() => {
    return model.value + " test"
  });
  
  const onFocus = () => {
    isEditing.value = true;
    nextTick(() => {
      if (inputNumber.value?.input) {
        inputNumber.value.input.focus();
      }
    });
  };
  
  const onBlur = async () => {
    isEditing.value = false;
    await nextTick();
  };
  </script>
  