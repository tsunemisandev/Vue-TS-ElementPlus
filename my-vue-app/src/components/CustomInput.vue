<template>
    <el-input :id="id" :disabled="disabled" style="width:150px"></el-input>
</template>

<script setup lang="ts">
import { inject, ref, useAttrs } from 'vue';

defineProps({
    disabled:{type:Boolean, default: false}
})

const attrs = useAttrs()
const paramId = attrs['id'] as String
const injectedId = inject('tip-id') as String
const id = ref('')

if(!paramId && injectedId){
  id.value = injectedId.valueOf()
}else{
    id.value = paramId.valueOf()
}
</script>