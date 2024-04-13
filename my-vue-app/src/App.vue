<template>
  <div>
    <CTable 
      :column-defs="columns" 
      :data="data"  
      :custom-cols="test" 
      border 
      style="width: 500px;"
      >
    </CTable>
  </div>
</template>

<script setup lang="ts">

import { CTable } from './components/CTable';
import { ColumnDefs } from './components/Model';
import { customCol2, input } from './components/Parts';

const test = customCol2
const columns: ColumnDefs[] = [
  {label:'Test', prop:'test', show: true},
  {label:'Col2', prop:'col2', show:true},  
]
const data = [{
  test: 'Test value',
  col2: 'Col2 value',
  col3: 'Col3 value'
}]

</script>

<style scoped>

</style>