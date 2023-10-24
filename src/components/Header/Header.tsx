import { Title } from "../Title";
import { Favorites } from "../Favorites";
import { SearchBar } from "../SearchBar";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerStart}>
        <Title />
        <Favorites />
      </div>
      <SearchBar />
    </header>
  );
};
