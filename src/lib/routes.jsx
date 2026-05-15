import { createBrowserRouter } from "react-router-dom";
import HomePage from '../components/Home/HomePage';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Layout from "../components/ui/Layout";
import ErrorElement from "../components/ui/ErrorElement";
import NotFount from "../components/ui/NotFount";
import Redirector from "../components/utils/Redirector";
import Profile from "../components/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        element: <Redirector />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
        ]
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