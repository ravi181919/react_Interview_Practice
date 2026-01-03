import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowIntro: JSON.parse(localStorage.getItem("showIntro")) ?? true,
};

export const introSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    autoTogglerOfShowIntro: (state) => {
      state.isShowIntro = !state.isShowIntro;
      localStorage.setItem("showIntro", JSON.stringify(state.isShowIntro));
    },
  },
});

export const { autoTogglerOfShowIntro } = introSlice.actions;
export default introSlice.reducer;
