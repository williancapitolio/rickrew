import { getLocalStorageData } from "./LocalStorage";

import { CharacterType, ResponseCharactersType } from "../types/CharactersType";

const BASE_URL = "https://rickandmortyapi.com/api/character/";

export const getAllCharacters = async (
  page?: number | undefined
): Promise<ResponseCharactersType> => {
  const response = await fetch(page ? BASE_URL + "?page=" + page : BASE_URL);

  if (!response.ok) throw new Error("Algo deu errado na requisição!");

  const data: ResponseCharactersType = await response.json();

  return data;
};

export const getSingleCharacter = async (
  id: number
): Promise<CharacterType> => {
  const response = await fetch(BASE_URL + id);

  if (response.status === 404) throw new Error("Personagem não encontrado!");

  if (!response.ok) throw new Error("Algo deu errado na requisição!");

  const data: CharacterType = await response.json();

  return data;
};

export const getFavoritesCharacters = async (): Promise<CharacterType[]> => {
  const favoritesCharacters = getLocalStorageData();

  if (favoritesCharacters.length === 0)
    throw new Error("Nenhum personagem favorito!");

  const response = await fetch(BASE_URL + favoritesCharacters);

  if (!response.ok) throw new Error("Algo deu errado na requisição!");

  const data: CharacterType[] = await response.json();

  return data;
};

export const getFilteredByNameCharacters = async (
  name: string
): Promise<ResponseCharactersType> => {
  const response = await fetch(BASE_URL + "?name=" + name);

  if (response.status !== 404 && response.status !== 200)
    throw new Error("Algo deu errado na requisição!");

  const data: ResponseCharactersType = await response.json();

  return data;
};
