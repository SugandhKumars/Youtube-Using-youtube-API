import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "Category",
  initialState: null,
  reducers: {
    SearchCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { SearchCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
