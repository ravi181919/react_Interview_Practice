import { configureStore } from "@reduxjs/toolkit";
import introReducer from "./slices/Intro/introSlices";
import themeRuder from "./slices/theme/themeSlice";

const store = configureStore({
  reducer: {
    intro: introReducer,
    isDarkTheme: themeRuder,
  },
});

export default store;
