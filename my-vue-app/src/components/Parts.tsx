import { ElInput } from "element-plus";
import { CustomCols } from "./Model";

export const customCol2: CustomCols = {
    'col2': (scope) => (
        <>
            <ElInput style={{width:'100px'}} v-model={scope.row.col2}>

            </ElInput>
            <ElInput v-model={scope.row.col3}>

            </ElInput>
        </>
    ),
    'col1':(scope) =>(<ElInput v-model={scope.row.col1}></ElInput>)
} 

