import { useEffect, useState } from "react";

import { useInfiniteScroll } from "./useInfiniteScroll";

import { useFilterCharactersByName } from "./useFilterCharactersByName";

import { CharacterType } from "../types/CharactersType";

export const useListCharactersHome = () => {
  const { loading, data, scrollLoadind, endDataPage } = useInfiniteScroll();

  const { searchedData, handleSearcBarText, searchText } =
    useFilterCharactersByName();

  const [showData, setShowData] = useState<CharacterType[]>([]);

  useEffect(() => {
    setShowData(data);
  }, [data]);

  useEffect(() => {
    !searchText ? setShowData([...data]) : setShowData(searchedData);
  }, [data, searchedData, searchText]);

  return { loading, scrollLoadind, endDataPage, handleSearcBarText, showData };
};
