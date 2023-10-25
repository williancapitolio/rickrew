import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { getAllCharacters } from "../services/Api";

import { CharacterType, ResponseCharactersType } from "../types/CharactersType";

export const useInfiniteScroll = () => {
  const [data, setData] = useState<[] | CharacterType[]>([]);
  const [loading, setLoadind] = useState(false);

  const loadedData = useLoaderData() as ResponseCharactersType;

  const [scrollLoadind, setScrollLoadind] = useState(false);
  const [page, setPage] = useState(2);
  const [endDataPage, setEndDataPage] = useState(false);

  const [offset, setOffset] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [displayMore, setDisplayMore] = useState(false);

  const [scrollExists, setScrollExists] = useState(true);

  const verifyIfScrollExists = () => {
    const winHeight = window.innerHeight;
    const bodyHeight = document.querySelector("body")?.offsetHeight.toFixed();
    if (bodyHeight) {
      if (winHeight > +bodyHeight) setScrollExists(false);
    }
  };

  useEffect(() => {
    !loading && verifyIfScrollExists();
  }, [loading]);

  useEffect(() => {
    setLoadind(true);
    setData(loadedData.results);
    setLoadind(false);
  }, [loadedData.results]);

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
    if (displayMore || !scrollExists) {
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
      setScrollExists(true);
    }
  }, [displayMore, page, data, loadedData.info.pages, scrollExists]);

  return { loading, data, scrollLoadind, endDataPage };
};
