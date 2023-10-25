import { CharacterType, ResponseCharactersType } from "../types/CharactersType";

const baseURL = "https://rickandmortyapi.com/api/character/";

export const getAllCharacters = async (
  page?: number | undefined
): Promise<ResponseCharactersType> => {
  const response = await fetch(page ? baseURL + "?page=" + page : baseURL);

  if (!response.ok) throw new Error("Algo deu errado na requisição!");

  const data: ResponseCharactersType = await response.json();

  return data;
};

export const getSingleCharacter = async (
  id: number
): Promise<CharacterType> => {
  const response = await fetch(baseURL + id);

  if (!response.ok) throw new Error("Algo deu errado na requisição!");

  const data: CharacterType = await response.json();

  return data;
};
