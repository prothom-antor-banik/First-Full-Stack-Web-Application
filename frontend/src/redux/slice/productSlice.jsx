import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
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

    ListProduct: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    GetProduct: (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    Error: (state) => {
      state.loading = true;
      state.success = false;
      state.error = true;
    },
  },
});

export const { Initial, Loading, ListProduct, GetProduct, Success, Error } =
  productSlice.actions;

export default productSlice.reducer;
