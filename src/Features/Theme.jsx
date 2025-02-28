import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { color: "black" },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
