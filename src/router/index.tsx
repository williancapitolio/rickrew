import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { Character } from "../pages/Character";
import { Favorites } from "../pages/Favorites";

import { charactersLoader } from "../loaders/charactersLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    /* loader: , */
    /* errorElement: ,*/
    children: [
      {
        index: true,
        element: <Home />,
        loader: charactersLoader,
      },
      {
        path: "character/:id",
        element: <Character />,
        /* loader: */
      },
      {
        path: "favorites/:ids",
        element: <Favorites />,
        /* loader: */
      },
    ],
  },
]);
