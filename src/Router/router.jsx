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
        element: <PropertyDetailsPage />,
        loader: () => axios.get(`../assets/properties.json`),
      },
      {
        path: "/agents",
        element: <AgentsPage />,
        loader: () => axios.get(`../assets/agents.json`),
      },
      {
        path: "/login",
        element: <LoginPage />,
        loader: () => axios.get(`../assets/books.json`),
      },
      {
        path: "/register",
        element: <RegisterPage />,
        loader: () => axios.get(`../assets/books.json`),
      },
      {
        path: "/users/:id",
        element: <UserDetailsPage />,
        loader: () => axios.get(`../assets/books.json`),
      },
      {
        path: "/login-success",
        element: <UserDetailsPage />,
        loader: () => axios.get(`../assets/books.json`),
      },
      
    ],
  },
]);

export default router;
