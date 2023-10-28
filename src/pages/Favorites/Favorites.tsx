import { useLoaderData } from "react-router-dom";

import { CharacterType } from "../../types/CharactersType";

export const Favorites = () => {
  const data = useLoaderData() as CharacterType[];
  console.log(data)
  return (
    <>
      <div></div>
    </>
  );
};
