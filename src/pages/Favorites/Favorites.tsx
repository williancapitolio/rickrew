import { useLoaderData } from "react-router-dom";

import { BackHome } from "../../components/BackHome";
import { Subtitle } from "../../components/Subtitle";

import styles from "./Favorites.module.scss";

import { CharacterType } from "../../types/CharactersType";

export const Favorites = () => {
  const loadedData = useLoaderData() as CharacterType[];
  console.log(loadedData);
  return (
    <section className={styles.favorites}>
      <BackHome />
      <Subtitle />

      <div></div>
    </section>
  );
};
