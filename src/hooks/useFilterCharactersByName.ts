import { useEffect, useState } from "react";

import { getFilteredByNameCharacters } from "../services/Api";

import { CharacterType } from "../types/CharactersType";

export const useFilterCharactersByName = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedData, setSearchedData] = useState<CharacterType[]>([]);

  const handleSearcBarText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = ev.target.value;
    setSearchText(targetValue);
  };

  useEffect(() => {
    const handleSearchResult = async () => {
      const searchResult = await getFilteredByNameCharacters(searchText);
      setSearchedData(searchResult.results);
    };

    if (searchText) handleSearchResult();
  }, [searchText]);

  return { searchedData, handleSearcBarText, searchText };
};
