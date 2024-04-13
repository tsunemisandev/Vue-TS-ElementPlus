import { ElTable, ElTableColumn, ElInput } from "element-plus";
import { defineComponent } from "vue";
import { ColumnDefs } from "./Model";
import { CustomCol } from "./Parts";

export const CTable = defineComponent({
    props: {
        columnDefs: Object as () => ColumnDefs[],
        customCols: Object as () => CustomCol | null // Adjust the prop type
    },
    setup(props, ctx) {
        const { attrs } = ctx;
        
        return () => (
            <ElTable {...attrs}>
                {
                    props.columnDefs?.map((col, index) => (
                        <ElTableColumn
                            key={index}
                            prop={col.prop}
                            label={col.label}
                            
                        >
                            {{
                                default: (scope) => (
                                    props.customCols && col.prop === props.customCols.prop? 
                                    props.customCols.input(scope) :
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
