import React, { useState } from "react";
import "./index.css";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/Routes";
import { useIntroHook } from "@/store/slices/Intro/useIntroHook";
import Intro from "@/features/Intro/Intro.jsx";
const App = () => {
  const { isIntro } = useIntroHook();

  return (
    <div className="w-full h-fit relative bg-neutral-900 dark:bg-neutral-50 text-neutral-100 dark:text-neutral-900">
      <ErrorBoundary>
        {isIntro ? <Intro /> : <RouterProvider router={router} />}
      </ErrorBoundary>
      <Toaster />
    </div>
  );
};

export default App;
