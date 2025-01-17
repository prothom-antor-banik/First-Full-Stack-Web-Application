import { createSlice } from "@reduxjs/toolkit";

export const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
    deliveries: [],
    rider_deliveries: [],
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

    ListDeliveries: (state, action) => {
      state.deliveries = action.payload.deliveries;
      state.pages = action.payload.pages;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    RiderDeliveries: (state, action) => {
      state.rider_deliveries = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    Delete: (state, action) => {
      state.deliveries = state.deliveries.filter((delivery) => {
        if (delivery.Id === action.payload) return false;
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
  ListDeliveries,
  RiderDeliveries,
  Delete,
} = deliverySlice.actions;

export default deliverySlice.reducer;
