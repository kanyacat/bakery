import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ProductSliceState, Status} from './types'
import axios from 'axios'
import {IProduct} from "@/app/pages/Catalogue/Catalogue";

export const fetchProducts = createAsyncThunk(
    'products/fetchProductStatus',
    async (params?: Object) => {

        // @ts-ignore
        const res = await axios.get<IProduct[]>(
            `https://bakery-backend-lime.vercel.app/catalogue`, params
        )
        return res.data
    }
)

const initialState: ProductSliceState = {
    items: [],
    status: Status.LOADING //loading | success | error
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<IProduct[]>) {
            state.items = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = Status.LOADING
                state.items = []
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // @ts-ignore
                state.items = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchProducts.rejected, state => {
                state.status = Status.ERROR
                state.items = []
            })
    }
})

export const { setItems } = productSlice.actions

export default productSlice.reducer