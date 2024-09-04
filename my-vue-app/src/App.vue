<template>
  <div>
    <el-input v-model="test3"></el-input>
    <el-input v-model="test2"></el-input>
    <el-input
      v-model="test"
      style="width: 150px"
      :disabled="computedDisable['test']"
    ></el-input>
    <el-button>Test</el-button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, Ref, ref, watch } from "vue";
import MockAdapter from "axios-mock-adapter";

const test = ref("");
const test2 = ref("");
const test3 = ref("");
const disabled: Ref<{ [key: string]: boolean }> = ref({});

const apiResult = ref("");

const isDisabled = () => {
  console.log("Hello");
  return false;
};

const isDisable = computed(() => {
  if (test2.value === "123") {
    return false;
  }
  return true;
});

watch(test2, () => {
  console.log("Checking");
  if (test2.value === "123") {
    console.log("disabled");
    disabled.value["test"] = true;
  } else {
    disabled.value["test"] = false;
  }
});

const computedDisable = computed<{ [key: string]: boolean }>(() => {
  if (test2.value === "123") {
    disabled.value["test"] = true;
  } else {
    disabled.value["test"] = false;
  }
  return disabled.value;
});

// const mock = new MockAdapter(axios)
// mock.onGet('/hello').reply(200, {
//   message:'Hello, World!'
// },{
//     'Content-Type': 'application/json',
//     'Custom-Header': 'FakeResponseHeader',
// })

// axios.get('/hello')
// .then(response =>{

//   apiResult.value = response.data
// })
// import { CTable } from './components/CTable';
// import { ColumnDefs } from './components/Model';
// import { customCol2} from './components/Parts';

// const test = customCol2
// const columns: ColumnDefs[] = [
//   {label:'Col1', prop:'col1', show: true},
//   {label:'Col2', prop:'col2', show:true},
// ]
// const data = [{
//   col1: 'Test value',
//   col2: 'Col2 value',
//   col3: 'Col3 value'
// }]
</script>

<style scoped></style>
