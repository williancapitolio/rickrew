import styles from "./SearchBar.module.scss";

import { CharacterType } from "../../types/CharactersType";

export type SearchBarProps = {
  loading?: boolean;
  searchedData?: CharacterType[];
  handleSearcBarText: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = ({ handleSearcBarText }: SearchBarProps) => {
  return (
    <input
      onChange={handleSearcBarText}
      className={styles.searchBar}
      type="text"
      placeholder="Pesquise por um personagem"
    />
  );
};
