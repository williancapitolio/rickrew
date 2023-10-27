import { useState } from "react";

export const useManageFavoritesCharacters = () => {
  /* const [isFavorite, setIsFavorite] = useState(false); */

  const [favoritesCharacters, setFavoritesCharacters] = useState<[] | number[]>(
    () => {
      const favoritesCharactersLocalStorage = localStorage.getItem(
        "favorites-characters"
      );
      if (!favoritesCharactersLocalStorage) return [];
      return JSON.parse(favoritesCharactersLocalStorage);
    }
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
    /* setIsFavorite(!isFavorite); */
  };

  const deleteFavorite = (id: number) => {
    setFavoritesCharacters((state) => {
      const newState = state.filter((idCharacter) => idCharacter !== id);
      localStorage.setItem("favorites-characters", JSON.stringify(newState));
      return newState;
    });
    /* setIsFavorite(!isFavorite); */
  };

  return {
    /* isFavorite, */
    favoritesCharacters,
    verifyIfIsFavorite,
    addFavorite,
    deleteFavorite,
  };
};
