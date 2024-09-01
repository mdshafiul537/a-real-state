import { createBrowserRouter } from "react-router-dom";

import axios from "axios";
import Root from "../Components/Root";
import HomePage from "../page/home";
import Error404Page from "../page/error404";
import AgentsPage from "../page/agents";
import PropertiesPage from "../page/properties";
import { LoginPage } from "../page/login";
import { RegisterPage } from "../page/register";
import PropertyDetailsPage from "../page/propertyDetailsPage";
import UserDetailsPage from "../page/userDetailsPage";
import PrivateRoute from "./PrivateRoute";
import UserUpdatePage from "../page/userUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => axios.get(`../assets/properties.json`),
      },
      {
        path: "/properties",
        element: <PropertiesPage />,
        loader: () => axios.get(`../assets/properties.json`),
      },
      {
        path: "/properties/:id",
        element: (
          <PrivateRoute>
            <PropertyDetailsPage />
          </PrivateRoute>
        ),
        loader: () => axios.get(`../assets/properties.json`),
      },
      {
        path: "/agents",
        element: (
          <PrivateRoute>
            <AgentsPage />
          </PrivateRoute>
        ),
        loader: () => axios.get(`../assets/agents.json`),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/users/profile",
        element: (
          <PrivateRoute>
            <UserDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/users/profile-update",
        element: (
          <PrivateRoute>
            <UserUpdatePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
