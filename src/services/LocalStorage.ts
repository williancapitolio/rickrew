export const getLocalStorageData = (): [] | number[] => {
  const favoritesCharactersLocalStorage = localStorage.getItem(
    "favorites-characters"
  );
  if (!favoritesCharactersLocalStorage) return [];
  return JSON.parse(favoritesCharactersLocalStorage);
};
