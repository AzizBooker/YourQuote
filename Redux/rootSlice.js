import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    changeTextPrimaryFont: (state, { payload }) => {},
  },
});
export const { changeTextPrimaryFont } = rootSlice.actions;
export default rootSlice.reducer;
