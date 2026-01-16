import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import MainLayout from "@/layouts/MainLayout";
import SuspenseWrapper from "@/components/common/SuspenseWrapper";

const Home = lazy(() => import("@/pages/Home"));
const Calendar = lazy(() => import("@/pages/Calendar"));
const Todos = lazy(() => import("@/pages/Todos"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));

export const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),
    children: [
      { path: "/", element: <SuspenseWrapper component={<Home />} /> },
      { path: "/dashboard", element: <SuspenseWrapper component={<Dashboard />} /> },
      {
        path: "/calender",
        element: <SuspenseWrapper component={<Calendar />} />,
      },
      {
        path: "/task",
        element: <SuspenseWrapper component={<Todos />} />,
      },
    ],
  },
]);
