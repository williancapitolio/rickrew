import styles from "./CharacterCard.module.scss";

import { CharacterType } from "../../types/CharactersType";

type CharacterCardProps = {
  characterData: CharacterType;
};

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  return (
    <section className={styles.card}>
      <img
        className={styles.cardImg}
        src={characterData.image}
        alt={"Imagem de " + characterData.name}
      />
      <span className={styles.cardTitle}>{characterData.name}</span>
    </section>
  );
};
