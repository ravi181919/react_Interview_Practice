import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkTheme: JSON.parse(localStorage.getItem("isDarkTheme") ?? false)
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem("isDarkTheme", JSON.stringify(state.isDarkTheme));
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
