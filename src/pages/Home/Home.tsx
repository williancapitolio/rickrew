import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

import { Header } from "../../components/Header";
import { Subtitle } from "../../components/Subtitle";
import { Loader } from "../../components/Loader";
import { CharacterCard } from "../../components/CharacterCard";

import styles from "./Home.module.scss";

export const Home = () => {
  const { loading, data, scrollLoadind, endDataPage } = useInfiniteScroll();

  return (
    <>
      <Header />
      <Subtitle text="Personagens" />
      {loading && <Loader />}
      <section className={styles.home}>
        {data.map((character) => (
          <CharacterCard characterData={character} key={character.id} />
        ))}
      </section>
      {scrollLoadind && <Loader />}
      {endDataPage && <h2>Fim dos resultados</h2>}
    </>
  );
};
