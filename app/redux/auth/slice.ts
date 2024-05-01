import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Status} from "@/app/redux/products/types";
import axios from "@/app/axios";

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async params => {
        const { data } = await axios.post('/register', params)
        return data
    }
)

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async params => {
    const { data } = await axios.post(`/login/`, params)
    return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const { data } = await axios.get('/me')
    return data
})

const initialState = {
    data: null,
    status: Status.LOADING
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.data = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchRegister.pending, state => {
                state.status = Status.LOADING
                state.data = null
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchRegister.rejected, state => {
                state.status = Status.ERROR
                state.data = null
            })
            .addCase(fetchAuth.pending, state => {
                state.status = Status.LOADING
                state.data = null
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchAuth.rejected, state => {
                state.status = Status.ERROR
                state.data = null
            })
            .addCase(fetchAuthMe.pending, state => {
                state.status = Status.LOADING
                state.data = null
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchAuthMe.rejected, state => {
                state.status = Status.ERROR
                state.data = null
            })
    }


})

export default authSlice.reducer

export const { logout } = authSlice.actions
