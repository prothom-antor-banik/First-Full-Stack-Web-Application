import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current_user: {},
    users: [],
    loading: false,
    success: false,
    error: false,
  },
  reducers: {
    Loading: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },

    Success: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
    },

    CurrentUser: (state, action) => {
      state.current_user = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    ListUser: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    Error: (state) => {
      state.success = false;
      state.loading = false;
      state.error = true;
    },
  },
});

export const { Loading, Success, CurrentUser, ListUser, Error } =
  userSlice.actions;

export default userSlice.reducer;
