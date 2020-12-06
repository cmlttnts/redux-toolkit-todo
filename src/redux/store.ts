import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "redux/reducer";

const middlewares = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: true
});

export default store;
