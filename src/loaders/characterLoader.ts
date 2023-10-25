import { LoaderFunctionArgs } from "react-router-dom";

import { getSingleCharacter } from "../services/Api";

import { CharacterType } from "../types/CharactersType";

export const characterLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<CharacterType> => {
  return await getSingleCharacter(Number(params.id));
};
