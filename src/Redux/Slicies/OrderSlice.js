import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../util/util.js';

const initialState = {orders :[], isLoading : false}

export const getAllOrders = createAsyncThunk("prders/getAllData", async() => {
    const { data } = await axios.get(`${baseUrl}/orders`);
  return data;
})

const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getAllOrders.pending, (state, actions) => {
            state.isLoading = true
        })
        builder.addCase(getAllOrders.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.orders = actions.payload.result
        })
    }
})

export const orderReducer = orderSlice.reducer;
