import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    pages: 0,
    order_id: 0,
    pending: true,
    loading: false,
    success: false,
    error: false,
  },
  reducers: {
    Initial: (state) => {
      state.pending = true;
      state.loading = false;
      state.success = false;
      state.error = false;
    },

    Loading: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },

    Success: (state) => {
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    Error: (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    },

    ToggleIsShown: (state, action) => {
      const id = action.payload;
      console.log("clicked: ", id);
      state.orders = state.orders.map((order) => {
        if (order.Id === id) {
          order.isShown = !order.isShown;
          return order;
        } else return order;
      });
    },

    CurrentOrder: (state, action) => {
      state.order_id = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    CurrentOrderState: (state, action) => {
      state.pending = action.payload;
      state.loading = false;
      state.success = false;
      state.error = false;
    },

    ListOrders: (state, action) => {
      state.orders = action.payload.orders;
      state.pages = action.payload.pages;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    Delete: (state, action) => {
      state.orders = state.orders.filter((order) => {
        if (order.Id === action.payload) return false;
        else return true;
      });
      state.loading = false;
      state.success = true;
      state.error = false;
    },
  },
});

export const {
  Initial,
  Loading,
  Success,
  Error,
  ToggleIsShown,
  CurrentOrder,
  CurrentOrderState,
  ListOrders,
  Delete,
} = orderSlice.actions;

export default orderSlice.reducer;
