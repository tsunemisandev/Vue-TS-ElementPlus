import { ElInput } from "element-plus";
import { JSX } from "vue/jsx-runtime";
import { CustomCol } from "./Model";

export const customCol2: CustomCol = {
    prop: 'col2',
    input: (scope) => (
        <>
            <ElInput style={{width:'100px'}} v-model={scope.row.col2}>

            </ElInput>
            <ElInput v-model={scope.row.col3}>

            </ElInput>
        </>
    )
} 