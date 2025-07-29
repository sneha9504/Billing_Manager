import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp(state, action) {
      const { email, password, username } = action.payload;
      const exists = state.users.find((u) => u.email === email);
      if (exists) {
        state.error = "User already exists";
      } else {
        const newUser = { email, password, username };
        state.users.push(newUser);
        state.currentUser = { email, username }; // ✅ username included here
        state.error = null;
      }
    },
    logIn(state, action) {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.currentUser = { email, username: user.username }; // ✅ includes username
        state.error = null;
      } else {
        state.error = "Invalid credentials";
      }
    },
    logOut(state) {
      state.currentUser = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { signUp, logIn, logOut, clearError } = authSlice.actions;
export default authSlice.reducer;
