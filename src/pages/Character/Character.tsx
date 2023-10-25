import { useLoaderData } from "react-router-dom";

import { CharacterType } from "../../types/CharactersType";

export const Character = () => {
  const loadedData = useLoaderData() as CharacterType;
  console.log(loadedData);
  return (
    <>
      <div></div>
    </>
  );
};
