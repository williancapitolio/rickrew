import { useFavoritesCharactersList } from "../../hooks/useFavoritesCharactersList";

import { BackHome } from "../../components/BackHome";
import { Subtitle } from "../../components/Subtitle";
import { Loader } from "../../components/Loader";
import { CharacterCard } from "../../components/CharacterCard";

import styles from "./Favorites.module.scss";

export const Favorites = () => {
  const { loading, data } = useFavoritesCharactersList();

  return (
    <>
      <BackHome />

      <section className={styles.favorites}>
        <Subtitle text="Favoritos" />

        {loading && <Loader />}

        <section className={styles.favoritesList}>
          {Array.isArray(data) ? (
            data.length > 0 &&
            data.map((character) => (
              <CharacterCard characterData={character} key={character.id} />
            ))
          ) : (
            <CharacterCard characterData={data} key={data.id} />
          )}
        </section>
      </section>
    </>
  );
};
