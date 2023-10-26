import { useLoaderData } from "react-router-dom";

import { BiStar /* , BiSolidStar */ } from "react-icons/bi";

import { BackHome } from "../../components/BackHome/BackHome";

import styles from "./Character.module.scss";

import { CharacterType } from "../../types/CharactersType";

export const Character = () => {
  const loadedData = useLoaderData() as CharacterType;

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
          <span className={styles.characterHeadDataIcon}>
            <BiStar className={styles.characterHeadDataIconSvg} />
          </span>
        </div>
      </section>

      <section className={styles.characterBody}>
        <section className={styles.characterBodyAbout}>
          <h4>Sobre</h4>
          <p>
            Status: <span>{loadedData.status}</span>
          </p>
          <p>
            Espécie: <span>{loadedData.species}</span>
          </p>
          <p>
            Gênero: <span>{loadedData.gender}</span>
          </p>
        </section>

        <section className={styles.characterBodyAbout}>
          <h4>Lugares</h4>
          <p>
            Origem: <span>{loadedData.origin.name}</span>
          </p>
          <p>
            Localização: <span>{loadedData.location.name}</span>
          </p>
        </section>
      </section>
    </article>
  );
};
