import { combineSlices, configureStore } from "@reduxjs/toolkit";
import auth from "../slices/auth";
import user from "../slices/user";

export const rootReducer = combineSlices(auth, user); //Se pueden pasar multiples slices para combinarlos todos en uno solo (rootReducer)

export default configureStore({
  reducer: rootReducer,
});