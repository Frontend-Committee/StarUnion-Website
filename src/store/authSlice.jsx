import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: localStorage.getItem("access") || null,
  loggedIn: !!localStorage.getItem("access")
};
const authSlice = createSlice({
  name: "auth",
  initialState:initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.loggedIn = true;
      localStorage.setItem("access", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.loggedIn = false;
      localStorage.removeItem("access");
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;