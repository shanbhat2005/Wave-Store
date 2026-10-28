import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../features/home/ui/HomePage";
import AuthProtectedRoutes from "./AuthProtectedRoutes";
import MainProtectedRoutes from "./MainProtectedRoutes";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtectedRoutes />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "/register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
     element:<MainProtectedRoutes/>,
     children:[{
         element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
     } ]
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
