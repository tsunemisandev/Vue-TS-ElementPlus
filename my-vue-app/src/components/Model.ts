import { JSX } from "vue/jsx-runtime"

export class ColumnDefs {
    label: string = ''
    prop: string = ''
    show: boolean = true
}

export interface CustomCol {
    prop: string
    input: (row) => JSX.Element
}

export type CustomCols = { [key: string]: (scope: any) => JSX.Element }