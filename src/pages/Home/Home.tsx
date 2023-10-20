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
  const [endDataPage, setEndDataPage] = useState(false);

  const [offset, setOffset] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [displayMore, setDisplayMore] = useState(false);

  const loadedData = useLoaderData() as ResponseCharactersType;

  useEffect(() => {
    setLoadind(true);
    setData(loadedData.results);
    setLoadind(false);
  }, [loadedData]);

  useEffect(() => {
    if (!endDataPage && !displayMore) {
      const onScroll = () => {
        setOffset(window.scrollY + window.innerHeight);
        setDocumentHeight(document.documentElement.offsetHeight);

        if (offset > documentHeight - 1000 && offset && documentHeight) {
          setOffset(0);
          setDocumentHeight(document.documentElement.offsetHeight);
          setDisplayMore(true);
        }
      };

      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [endDataPage, offset, documentHeight, displayMore]);

  useEffect(() => {
    if (displayMore) {
      setScrollLoadind(true);

      const fetchNextCharacters = async (page: number) => {
        if (page < loadedData.info.pages + 1) {
          const nextCharacters = await getAllCharacters(page);

          setData([...data, ...nextCharacters.results]);
        } else {
          setEndDataPage(true);
        }
      };

      setPage(page + 1);
      fetchNextCharacters(page);
      setDisplayMore(false);
      setScrollLoadind(false);
    }
  }, [displayMore, page, data, loadedData.info.pages]);

  return (
    <>
      <section>
        {loading && <h2>Carregando...</h2>}
        {data.map((character) => (
          <CharacterCard characterData={character} key={character.id} />
        ))}
      </section>
      {scrollLoadind && <h2>Carregando...</h2>}
      {endDataPage && <h2>Fim dos resultados</h2>}
    </>
  );
};
