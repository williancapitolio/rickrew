import { useLoaderData } from "react-router-dom";

import { CharacterType } from "../../types/CharactersType";
import { BackHome } from "../../components/BackHome/BackHome";

export const Character = () => {
  const loadedData = useLoaderData() as CharacterType;
  console.log(loadedData);
  return (
    <>
      <BackHome />
      <section>
        <img src={loadedData.image} alt={"Imagem de " + loadedData.name} />
        <h2>{loadedData.name}</h2>
      </section>
    </>
  );
};
