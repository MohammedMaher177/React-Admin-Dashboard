import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../util/util.js';

const initialState = { isLoading: false, employees: [] };

export const getAllEmployees = createAsyncThunk('employees/getAllData', async () => {
  const { data } = await axios.get(`${baseUrl}/employees`);
  return data;
});

const employeeSlice = createSlice({
  name: 'Employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllEmployees.fulfilled, (state, actions) => {
      const {data} = actions.payload
      state.isLoading = false;
      if(data?.message === "success"){
        state.employees = data.result
        // console.log(data);
      }
      state.employees = actions.payload;
    });
  },

});

export const employeeReducer = employeeSlice.reducer;
