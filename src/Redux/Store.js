import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from './Slicies/EmployeeSlice.js';
import { customerReducer } from './Slicies/CustomerSlice.js';
import { orderReducer } from './Slicies/OrderSlice.js';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    customer: customerReducer,
    order: orderReducer,
  },
});

