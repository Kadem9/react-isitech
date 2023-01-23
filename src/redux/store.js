import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
