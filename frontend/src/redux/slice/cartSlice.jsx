import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product_list: [],
    products: 0,
    items: 0,
    price: 0,
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

    ListProducts: (state, action) => {
      state.product_list = action.payload;
      state.products = action.payload.length;
      let items = 0;
      let price = 0;
      state.product_list.map((product) => {
        items += product.items;
        price += product.product.price * product.items;
      });
      state.items = items;
      state.price = price;
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

export const {
  Initial,
  Loading,
  Success,
  ListProducts,
  UpdateProducts,
  Error,
} = cartSlice.actions;

export default cartSlice.reducer;
