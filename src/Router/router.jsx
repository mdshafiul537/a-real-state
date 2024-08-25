import { createBrowserRouter } from "react-router-dom";

import axios from "axios";
import Root from "../Components/Root";
import HomePage from "../page/home";
import Error404Page from "../page/error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "/books",
      //   element: <AllBookPage />,
      //   loader: () => axios.get(`../assets/books.json`),
      // },
    ],
  },
]);

export default router;
