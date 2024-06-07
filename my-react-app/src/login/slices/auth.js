import { createSlice } from "@reduxjs/toolkit";

// Definimos el slice de autenticación
const authSlice = createSlice({
  name: "auth",
  initialState: {
    autenticado: false,
  },
  reducers: {
    login: (state) => {
      // Cambia autenticado a true cuando se ejecuta login
      state.autenticado = true;
    },
    logout: (state) => {
      // Cambia autenticado a false cuando se ejecuta logout
      state.autenticado = false;
    },
  },
});

// Exportar acciones creadas por el slice
export const { login, logout } = authSlice.actions;

// Exportar reducer generado por el slice
export default authSlice.reducer;