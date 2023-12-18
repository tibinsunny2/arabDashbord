// store.js
import UBER_DATAReducer from "./Reducer.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: UBER_DATAReducer,
});

export default store;
