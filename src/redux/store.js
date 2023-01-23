import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // Je mettrais ici les reducers lorsque j'en aurais
});
const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
