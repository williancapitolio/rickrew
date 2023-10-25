import styles from "./CharacterCard.module.scss";

import { CharacterType } from "../../types/CharactersType";
import { Link } from "react-router-dom";

type CharacterCardProps = {
  characterData: CharacterType;
};

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  return (
    <Link to={"/character/" + characterData.id} className={styles.card}>
      <img
        className={styles.cardImg}
        src={characterData.image}
        alt={"Imagem de " + characterData.name}
      />
      <span className={styles.cardTitle}>{characterData.name}</span>
    </Link>
  );
};
