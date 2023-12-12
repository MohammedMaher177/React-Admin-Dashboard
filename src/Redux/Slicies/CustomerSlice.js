import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../util/util.js';

const initialState = {customers :[], isLoading : false}

export const getAllCustomers = createAsyncThunk("customers/getAllData", async() => {
    const { data } = await axios.get(`${baseUrl}/customers`);
  return data;
})

const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getAllCustomers.pending, (state, actions) => {
            state.isLoading = true
        })
        builder.addCase(getAllCustomers.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.customers = actions.payload.result
        })
    }
})

export const customerReducer = customerSlice.reducer;
