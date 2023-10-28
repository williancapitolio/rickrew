import { useState } from "react";

import { getLocalStorageData } from "../services/LocalStorage";

export const useManageFavoritesCharacters = () => {
  const [favoritesCharacters, setFavoritesCharacters] = useState<[] | number[]>(
    () => getLocalStorageData()
  );

  const verifyIfIsFavorite = (id: number): boolean => {
    const isFavorite = favoritesCharacters.find(
      (idCharacter) => idCharacter === id
    );

    if (isFavorite) return true;
    else return false;
  };

  const addFavorite = (id: number) => {
    setFavoritesCharacters((state) => {
      const newState = [...state, id];
      localStorage.setItem("favorites-characters", JSON.stringify(newState));
      return newState;
    });
  };

  const deleteFavorite = (id: number) => {
    setFavoritesCharacters((state) => {
      const newState = state.filter((idCharacter) => idCharacter !== id);
      localStorage.setItem("favorites-characters", JSON.stringify(newState));
      return newState;
    });
  };

  return {
    favoritesCharacters,
    verifyIfIsFavorite,
    addFavorite,
    deleteFavorite,
  };
};
