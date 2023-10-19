import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { CharacterCard } from "../../components/CharacterCard/CharacterCard";

import {
  CharacterType,
  ResponseCharactersType,
} from "../../types/CharactersType";
import { getAllCharacters } from "../../services/Api";

export const Home = () => {
  const [data, setData] = useState<[] | CharacterType[]>([]);
  const [loading, setLoadind] = useState(false);
  const [scrollLoadind, setScrollLoadind] = useState(false);
  const [page, setPage] = useState(2);
  const [endPage, setEndPage] = useState(false)

  const loadedData = useLoaderData() as ResponseCharactersType;

  function getEndOfPage() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;
    scrollPosition >= documentHeight - 1000 && setEndPage(true)
    return scrollPosition >= documentHeight - 1000;
  }

  const fetchNextCharacters = async () => {
    if (page > loadedData.info.pages) return;
    setScrollLoadind(true);

    setPage(page + 1);

    const nextCharacters = await getAllCharacters(page);

    setData([...data, ...nextCharacters.results]);
    setScrollLoadind(false);
  };

  const handleInfiniteScroll = () => {
    if (getEndOfPage()) {
      fetchNextCharacters();
      setEndPage(false)
    }
  };

  useEffect(() => {
    setLoadind(true);
    setData(loadedData.results);
    setLoadind(false);
  }, [loadedData]);

  useEffect(() => {
    if (endPage) {
      window.addEventListener("scroll", handleInfiniteScroll);
    } else {
      window.removeEventListener("scroll", handleInfiniteScroll);
    }
  }, [endPage]);

  

  return (
    <>
      <section>
        {loading && <h2>Carregando...</h2>}
        {data.map((character) => (
          <CharacterCard characterData={character} key={character.id} />
        ))}
      </section>
      {scrollLoadind && <h2>Carregando...</h2>}
    </>
  );
};
