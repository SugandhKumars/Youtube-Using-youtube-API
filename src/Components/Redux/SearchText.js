import { createSlice } from "@reduxjs/toolkit";

const SearchText = createSlice({
  name: "searchText",
  initialState: null,
  reducers: {
    setText: (state, action) => {
      return action.payload;
    },
  },
});

export const { setText } = SearchText.actions;
export default SearchText.reducer;
