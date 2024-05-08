import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status} from './types'
import axios from "@/app/axios";

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async () => {

        const res = await axios.get(
            `http://localhost:4444/cart`
        )
        return res.data
    }
)

const initialState: any = {
    items: [],
    status: Status.LOADING //loading | success | error
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction) {
            state.items = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCart.pending, state => {
                state.status = Status.LOADING
                state.items = []
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                // @ts-ignore
                state.items = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchCart.rejected, state => {
                state.status = Status.ERROR
                state.items = []
            })
    }
})

export const { setItems } = cartSlice.actions

export default cartSlice.reducer