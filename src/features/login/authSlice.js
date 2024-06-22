import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  // eslint-disable-next-line no-undef
  initialState: { isLoggedIn },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
