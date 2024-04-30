import {IProduct} from "@/app/pages/Catalogue/Catalogue";

export type FetchPizzasParams = Record<string, string> //все ключи и все значения string

// export type PizzaItem = {
//     id: string
//     imageUrl: string
//     title: string
//     types: number[]
//     sizes: number[]
//     price: number
// }

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface ProductSliceState {
    items: IProduct[]
    status: Status
}