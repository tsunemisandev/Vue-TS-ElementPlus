<template>
  <div>
    <el-button @click="addRow">Add row</el-button>
    <ul>
      <li v-for="row in data">{{ row.title }}</li>
    </ul>
  </div>
</template>
<script setupe lang="ts">
import { useAddRow } from "~/functions/useAddRow";

export default defineComponent({
  name: "Table",
  setup() {
    const { addRow, data } = useAddRow();
    return {
      addRow,
      data,
    };
  },
});
</script>
