import { BackHome } from "../../components/BackHome";
import { Subtitle } from "../../components/Subtitle";

import styles from "./FavoritesError.module.scss";

export const FavoritesError = () => {
  return (
    <section className={styles.favoritesError}>
      <BackHome />

      <section className={styles.favoritesErrorContent}>
        <Subtitle text="Favoritos" />

        <section className={styles.favoritesErrorContentList}>
          <p>Nenhum personagem favorito!</p>
        </section>
      </section>
    </section>
  );
};
