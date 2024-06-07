import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null, // Cambiado de 'user' a 'username' para claridad
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
    },
    clearUser: (state) => {
      state.username = null;
    }
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;