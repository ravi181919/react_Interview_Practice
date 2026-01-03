import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { autoTogglerOfShowIntro } from "./introSlices";

export const useIntroHook = (delay = 1.5) => {
  const isIntro = useSelector((state) => state.intro.isShowIntro);
  const dispatch = useDispatch();

  useEffect(() => {
    const offIntroTimer = setTimeout(() => {
      dispatch(autoTogglerOfShowIntro());
    }, delay * 1000);

    return () => clearTimeout(offIntroTimer);
  }, [dispatch, delay]);

  return { isIntro };
};
