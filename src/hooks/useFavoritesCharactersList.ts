import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { CharacterType } from "../types/CharactersType";

export const useFavoritesCharactersList = () => {
  const [data, setData] = useState<[] | CharacterType[]>([]);
  const [loading, setLoading] = useState(false);

  const loadedData = useLoaderData() as CharacterType[];

  useEffect(() => {
    setLoading(true);
    setData(loadedData);
    setLoading(false);
  }, [loadedData]);

  return { data, loading };
};
