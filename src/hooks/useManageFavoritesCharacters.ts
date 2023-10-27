import { useState } from "react";

export const useManageFavoritesCharacters = () => {
  const [isFavorite, setIsFavorite] = useState<[] | number[]>(() => {
    const favoritesCharacters = localStorage.getItem("favorites-characters");
    if (!favoritesCharacters) return [];
    return JSON.parse(favoritesCharacters);
  });

  const addFavorite = (id: number) => {
    setIsFavorite((state) => {
      const newState = [...state, id];
      localStorage.setItem("favorites-characters", JSON.stringify(newState));
      return newState;
    });
  };

  const deleteFavorite = (id: number) => {
    setIsFavorite((state) => {
      const newState = state.filter((idCharacter) => idCharacter !== id);
      localStorage.setItem("favorites-characters", JSON.stringify(newState));
      return newState;
    });
  };

  return { isFavorite, addFavorite, deleteFavorite };
};
