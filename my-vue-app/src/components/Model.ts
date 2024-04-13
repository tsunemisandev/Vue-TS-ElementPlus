export class ColumnDefs {
    label:string = ''
    prop:string = ''
    show:boolean = true
}

export interface CustomCol {
    prop: string
    input: (row) => JSX.Element
}