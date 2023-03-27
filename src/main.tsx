import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/login/signIn";
import ErrorPage from "./components/error-page";
import PrivateRoute from "./components/routers/PrivateRoute";
import PublicRoute from "./components/routers/PublicRoute";
import LeaveTracker from "./components/leave-tracker/leave-tracker";
import LeaveForm from "./components/leave-tracker/leave-form";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/leave-tracker",
    element: (
      <PrivateRoute>
        <LeaveTracker />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/leave-form",
    element: (
      <PrivateRoute>
        <LeaveForm />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
