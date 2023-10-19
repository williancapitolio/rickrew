import { getAllCharacters } from "../services/Api";

import { ResponseCharactersType } from "../types/CharactersType";

export const charactersLoader = async (): Promise<ResponseCharactersType> => {
  return await getAllCharacters();
};
