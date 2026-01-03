import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./themeSlice";

const useTheme = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.isDarkTheme.isDarkTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => dispatch(setTheme());

  return { isDarkTheme, toggleTheme };
};

export default useTheme;
