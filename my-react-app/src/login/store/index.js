import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import userReducer from "../slices/user";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
});
