import { createBrowserRouter } from "react-router-dom";
import HomePage from '../components/Home/HomePage';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Layout from "../components/ui/Layout";
import ErrorElement from "../components/ui/ErrorElement";
import NotFount from "../components/ui/NotFount";
import { Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
        // element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/*",
        element: <NotFount />,
      },
    ]
  },
]);