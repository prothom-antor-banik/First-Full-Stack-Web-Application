import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loading: false,
    success: false,
    error: false,
  },
  reducers: {
    Initial: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
    },

    Loading: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },

    Success: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    Error: (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    },
  },
});

export const { Initial, Loading, Success, Error } = orderSlice.actions;

export default orderSlice.reducer;
