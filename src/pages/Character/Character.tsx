import { useLoaderData } from "react-router-dom";

import { BiStar, BiSolidStar } from "react-icons/bi";

import { useManageFavoritesCharacters } from "../../hooks/useManageFavoritesCharacters";

import { BackHome } from "../../components/BackHome";

import styles from "./Character.module.scss";

import { CharacterType } from "../../types/CharactersType";

export const Character = () => {
  const loadedData = useLoaderData() as CharacterType;

  const { verifyIfIsFavorite, addFavorite, deleteFavorite } =
    useManageFavoritesCharacters();

  return (
    <article className={styles.character}>
      <BackHome />

      <section className={styles.characterHead}>
        <img
          className={styles.characterHeadImg}
          src={loadedData.image}
          alt={"Imagem de " + loadedData.name}
        />
        <div className={styles.characterHeadData}>
          <h2>{loadedData.name}</h2>
          {verifyIfIsFavorite(loadedData.id) ? (
            <span
              className={styles.characterHeadDataIcon}
              onClick={() => deleteFavorite(loadedData.id)}
            >
              <BiSolidStar className={styles.characterHeadDataIconSvg} />
            </span>
          ) : (
            <span
              className={styles.characterHeadDataIcon}
              onClick={() => addFavorite(loadedData.id)}
            >
              <BiStar className={styles.characterHeadDataIconSvg} />
            </span>
          )}
        </div>
      </section>

      <section className={styles.characterBody}>
        <section className={styles.characterBodyAbout}>
          <h4>Sobre</h4>
          {[
            ["Status:", loadedData.status],
            ["Espécie:", loadedData.species],
            ["Gênero:", loadedData.gender],
          ].map((item) => (
            <p>
              {item[0]} <span>{item[1]}</span>
            </p>
          ))}
        </section>

        <section className={styles.characterBodyAbout}>
          <h4>Lugares</h4>
          {[
            ["Origem:", loadedData.origin.name],
            ["Localização:", loadedData.location.name],
          ].map((item) => (
            <p>
              {item[0]} <span>{item[1]}</span>
            </p>
          ))}
        </section>
      </section>
    </article>
  );
};
