import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isDarkMode: false,
};
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeIsDarkMode: (state, { payload }) => {
       state.isDarkMode=payload
    },
  },
});
export const { changeIsDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
