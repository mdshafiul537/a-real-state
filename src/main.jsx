import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import viteLogo from "/vite.svg";
// import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./style.css";

import router from "./Router/router";
import ContextWrapper from "./Components/Context/ContextWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  </React.StrictMode>
);
