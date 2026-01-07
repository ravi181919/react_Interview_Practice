import { configureStore } from "@reduxjs/toolkit";
import introReducer from "./slices/Intro/introSlices";
import themeRuder from "./slices/theme/themeSlice";
import todosReducer from "./slices/todos/todosSlice";

const store = configureStore({
  reducer: {
    intro: introReducer,
    isDarkTheme: themeRuder,
    todos: todosReducer,
  },
});

export default store;
