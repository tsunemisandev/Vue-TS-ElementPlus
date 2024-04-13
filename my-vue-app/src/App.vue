<template>
  <div>
    <CTable 
      :column-defs="columns" 
      :data="data"  
      :custom-cols="test" 
      style="width: 500px;"
      >
    </CTable>
  </div>
</template>

<script setup lang="ts">

import { CTable } from './components/CTable';
import { ColumnDefs } from './components/Model';
import { customCol2} from './components/Parts';

const test = customCol2
const columns: ColumnDefs[] = [
  {label:'Col1', prop:'col1', show: true},
  {label:'Col2', prop:'col2', show:true},  
]
const data = [{
  col1: 'Test value',
  col2: 'Col2 value',
  col3: 'Col3 value'
}]

</script>

<style scoped>

</style>