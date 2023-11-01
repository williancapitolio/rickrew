import { useEffect, useState } from "react";

import { getFilteredByNameCharacters } from "../services/Api";

import { CharacterType } from "../types/CharactersType";

export const useFilterCharactersByName = () => {
  const [searchText, setSearchText] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedData, setSearchedData] = useState<CharacterType[]>([]);

  const handleSearcBarText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLoading(true);
    setTimeout(() => {
      const targetValue = ev.target.value;
      setSearchText(targetValue);
      setSearchLoading(false);
    }, 1000 * 3);
  };

  useEffect(() => {
    const handleSearchResult = async () => {
      const searchResult = await getFilteredByNameCharacters(searchText);
      setSearchedData(searchResult.results);
    };

    if (searchText) handleSearchResult();
  }, [searchText]);

  return { searchLoading, searchedData, handleSearcBarText };
};
