import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice/categorySlice";
export default configureStore({
  reducer: {
    category: categoryReducer,
  },
});
