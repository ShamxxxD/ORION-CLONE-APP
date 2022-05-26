import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: "Toàn bộ",
  },
  reducers: {
    getCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCategory } = categorySlice.actions;

export default categorySlice.reducer;
