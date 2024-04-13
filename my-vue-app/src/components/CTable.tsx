import { ElTable, ElTableColumn, ElInput } from "element-plus";
import { defineComponent } from "vue";
import { ColumnDefs, CustomCols } from "./Model";

export const CTable = defineComponent({
    props: {
        columnDefs: Object as () => ColumnDefs[],
        customCols: Object as () => CustomCols | null // Adjust the prop type
    },
    setup(props, ctx) {
        const { attrs } = ctx;        
        
        return () => (
            <ElTable border={true} {...attrs} >
                {
                    props.columnDefs?.map((col, index) => (
                        <ElTableColumn
                            key={index}
                            prop={col.prop}
                            label={col.label}  
                            
                        >
                            {{
                                default: (scope) => (
                                    props.customCols && props.customCols[col.prop]? 
                                    props.customCols[col.prop](scope):
                                    scope.row[col.prop]
                                )
                            }}
                        </ElTableColumn>
                    ))
                }
            </ElTable>
        );
    }
});
