import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current_user: localStorage.getItem("current_user")
      ? JSON.parse(localStorage.getItem("current_user"))
      : {},
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
      localStorage.setItem("current_user", JSON.stringify(action.payload));
      state.current_user = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },

    RemoveUser: (state) => {
      localStorage.removeItem("current_user");
      state.current_user = {};
      state.loading = false;
      state.success = false;
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

export const { Loading, Success, CurrentUser, RemoveUser, ListUser, Error } =
  userSlice.actions;

export default userSlice.reducer;
