import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { CharacterCard } from "../../components/CharacterCard/CharacterCard";

import {
  CharacterType,
  ResponseCharactersType,
} from "../../types/CharactersType";

export const Home = () => {
  const [data, setData] = useState<[] | CharacterType[]>([]);
  const [loading, setLoadind] = useState(false);

  const loadedData = useLoaderData() as ResponseCharactersType;

  useEffect(() => {
    setLoadind(true);
    setData(loadedData.results);
    setLoadind(false);
  }, [loadedData]);

  window.addEventListener("scroll", () => {
    //scroll - tam janela - tam inteiro pagina - final da pagina 500??
    //console.log(window.scrollY, window.innerHeight, document.documentElement.offsetHeight, window.scrollY + window.innerHeight)
    //chamar funcao que poe loadingpagination como true
    if (window.scrollY + window.innerHeight === 6715) {
      setData([...data, loadedData.results])
    }
  })

  return (
    <section>
      {loading && <h2>Carregando...</h2>}
      {data.map((character) => (
        <CharacterCard characterData={character} key={character.id} />
      ))}
    </section>
  );
};
