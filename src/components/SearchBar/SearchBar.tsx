import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Pesquise por um personagem"
    />
  );
};
