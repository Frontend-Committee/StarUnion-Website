import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: localStorage.getItem("token") || null,
  loggedIn: !!localStorage.getItem("token")
};
const authSlice = createSlice({
  name: "auth",
  initialState:initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.loggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.loggedIn = false;
      localStorage.removeItem("token");
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;