import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import MainLayout from "@/layouts/MainLayout";
import SuspenseWrapper from "@/components/common/SuspenseWrapper";

const Home = lazy(() => import("@/pages/Home"));
const Calendar = lazy(() => import("@/pages/Calendar"));
const AddTask = lazy(() => import("@/pages/AddTask"));

export const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),
    children: [
      { path: "/", element: <SuspenseWrapper component={<Home />} /> },
      {
        path: "/calender",
        element: <SuspenseWrapper component={<Calendar />} />,
      },
      {
        path: "/addtask",
        element: <SuspenseWrapper component={<AddTask />} />,
      },
    ],
  },
]);
