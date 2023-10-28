import { getFavoritesCharacters } from "../services/Api";

import { CharacterType } from "../types/CharactersType";

export const favoritesLoader = async (): Promise<CharacterType[]> => {
  return await getFavoritesCharacters();
};
