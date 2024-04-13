<script setup lang="ts">
import { ref } from 'vue';
import CustomInput from './components/CustomInput.vue';
import Wrapper from './components/Wrapper.vue';
const text1 = ref('')
let disabled = ref(false)
</script>



<template>
<el-button @click="()=>disabled=false">Test</el-button>
<Wrapper tip-id="parentid">
    <CustomInput id="childid"  v-model="text1" :disabled="disabled"></CustomInput>
</Wrapper>
</template>

<style scoped>

</style>
