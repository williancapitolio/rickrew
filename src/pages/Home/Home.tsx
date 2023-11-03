import { useListCharactersHome } from "../../hooks/useListCharactersHome";

import { Header } from "../../components/Header";
import { Subtitle } from "../../components/Subtitle";
import { Loader } from "../../components/Loader";
import { CharacterCard } from "../../components/CharacterCard";

import styles from "./Home.module.scss";

export const Home = () => {
  const { loading, scrollLoadind, endDataPage, handleSearcBarText, showData } =
    useListCharactersHome();

  return (
    <>
      <Header handleSearcBarText={handleSearcBarText} />
      <Subtitle text="Personagens" />
      {loading && <Loader />}
      <section className={styles.home}>
        {showData ? (
          showData.map((character) => (
            <CharacterCard characterData={character} key={character.id} />
          ))
        ) : (
          <p>Nenhum personagem encontrado!</p>
        )}
      </section>
      {scrollLoadind && <Loader />}
      {endDataPage && <h2>Fim dos resultados</h2>}
    </>
  );
};
