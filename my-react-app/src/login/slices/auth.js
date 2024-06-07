// slices/auth.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    autenticado: false,
  },
  reducers: () => ({ // reducers: (create)
    login: ()=>{}, //login: (state, action)
    logout: ()=>{}
  }),
});

//Exportamos el slice y las acciones creadas por el slice:
export default authSlice;
export const { login, logout } = authSlice.actions;