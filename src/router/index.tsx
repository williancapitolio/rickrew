import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { DefaultError } from "../errors/DefaultError";

import { Home } from "../pages/Home";
import { charactersLoader } from "../loaders/charactersLoader";

import { Character } from "../pages/Character";
import { characterLoader } from "../loaders/characterLoader";

import { Favorites } from "../pages/Favorites";
import { favoritesLoader } from "../loaders/favoritesLoader";
import { FavoritesError } from "../errors/FavoritesError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <DefaultError />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: charactersLoader,
      },
      {
        path: "character/:id",
        element: <Character />,
        loader: characterLoader,
      },
      {
        path: "favorites",
        element: <Favorites />,
        loader: favoritesLoader,
        errorElement: <FavoritesError />,
      },
    ],
  },
]);
