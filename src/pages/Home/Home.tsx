import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { useFilterCharactersByName } from "../../hooks/useFilterCharactersByName";

import { Header } from "../../components/Header";
import { Subtitle } from "../../components/Subtitle";
import { Loader } from "../../components/Loader";
import { CharacterCard } from "../../components/CharacterCard";

import styles from "./Home.module.scss";

export const Home = () => {
  const { loading, data, scrollLoadind, endDataPage } = useInfiniteScroll();

  const { searchLoading, searchedData, handleSearcBarText } =
    useFilterCharactersByName();

  return (
    <>
      <Header handleSearcBarText={handleSearcBarText} />
      <Subtitle text="Personagens" />
      {loading || (searchLoading && <Loader />)}
      <section className={styles.home}>
        {searchedData.length === 0
          ? data.map((character) => (
              <CharacterCard characterData={character} key={character.id} />
            ))
          : searchedData.map((character) => (
              <CharacterCard characterData={character} key={character.id} />
            ))}
      </section>
      {scrollLoadind && <Loader />}
      {endDataPage && <h2>Fim dos resultados</h2>}
    </>
  );
};
