import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import productReducer from './products/slice'
import authReducer from './auth/slice'


export const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authReducer

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


