import React, { useState } from "react";
import "./index.css";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/Routes";
import { useIntroHook } from "@/store/slices/Intro/useIntroHook";
import Intro from "@/components/common/Intro";
const App = () => {
  const { isIntro } = useIntroHook();
  console.log(isIntro);
  
  return isIntro ? (
    <div className="">
      <Intro />
    </div>
  ) : (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
