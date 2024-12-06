import { createSlice } from "@reduxjs/toolkit";

export const summarySlice = createSlice({
  name: "summary",
  initialState: {
    products: [],
    summary: {},
    pages: 0,
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

    ListProducts: (state, action) => {
      state.products = action.payload.products;
      state.summary = action.payload.summary;
      state.pages = action.payload.pages;
      state.loading = false;
      state.success = true;
      state.error = false;
    },
  },
});

export const { Initial, Loading, Success, Error, ListProducts } =
  summarySlice.actions;

export default summarySlice.reducer;
