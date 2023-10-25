import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

import { CharacterCard } from "../../components/CharacterCard";

import styles from "./Home.module.scss";

export const Home = () => {
  const { loading, data, scrollLoadind, endDataPage } = useInfiniteScroll();

  return (
    <>
      <section className={styles.home}>
        {loading && <h2>Carregando...</h2>}
        {data.map((character) => (
          <CharacterCard characterData={character} key={character.id} />
        ))}
      </section>
      {scrollLoadind && <h2>Carregando...</h2>}
      {endDataPage && <h2>Fim dos resultados</h2>}
    </>
  );
};
