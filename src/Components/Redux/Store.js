import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./CategorySlice";
import SearchText from "./SearchText";
const store = configureStore({
  reducer: {
    category: CategoryReducer,
    search: SearchText,
  },
});

export default store;
