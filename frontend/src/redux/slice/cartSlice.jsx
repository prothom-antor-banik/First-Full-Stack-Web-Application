import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product_list: [],
    products: 0,
    items: 0,
    price: 0,
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

    ListProducts: (state, action) => {
      state.product_list = action.payload.cart;
      state.products = action.payload.cart.length;
      let items = 0;
      let price = 0;
      state.product_list.map((product) => {
        items += product.items;
        price += product.product.price * product.items;
      });
      state.items = items;
      state.price = price;
      state.pages = action.payload.pages;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    Update: (state, action) => {
      state.product_list = state.product_list.map((product) => {
        if (product.Id === action.payload.Id) {
          return { ...product, ...action.payload.entry };
        } else return product;
      });
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

    Delete: (state, action) => {
      state.product_list = state.product_list.filter((product) => {
        if (product.Id === action.payload) return false;
        else return true;
      });
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
  Update,
  Delete,
  Error,
} = cartSlice.actions;

export default cartSlice.reducer;
