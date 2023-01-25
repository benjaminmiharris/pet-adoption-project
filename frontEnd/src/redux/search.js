import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  advancedSeach: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showAdvancedSearch: (state, action) => {
      console.log("state", state.value);
      console.log("action", action);
      state.value = !state.value;
    },
  },
});

export const { showAdvancedSearch } = searchSlice.actions;

export default searchSlice.reducer;
