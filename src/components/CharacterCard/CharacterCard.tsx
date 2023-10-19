import { CharacterType } from "../../types/CharactersType";

type CharacterCardProps = {
  characterData: CharacterType;
};

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  return (
    <section>
      <section>
        <img
          src={characterData.image}
          alt={"Imagem de " + characterData.name}
        />
      </section>
      <h3>{characterData.name}</h3>
    </section>
  );
};
