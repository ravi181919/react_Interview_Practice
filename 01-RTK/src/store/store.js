import { configureStore } from "@reduxjs/toolkit";
import introReducer from "./slices/Intro/introSlices";

const store = configureStore({
  reducer: {
    intro: introReducer,
  },
});

export default store;
