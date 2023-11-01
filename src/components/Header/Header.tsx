import { Title } from "../Title";
import { Favorites } from "../Favorites";
import { SearchBar } from "../SearchBar";

import styles from "./Header.module.scss";

import { SearchBarProps } from "../SearchBar/SearchBar";

type HeaderProps = Pick<SearchBarProps, "handleSearcBarText">;

export const Header = ({ handleSearcBarText }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerStart}>
        <Title />
        <Favorites />
      </div>
      <SearchBar handleSearcBarText={handleSearcBarText} />
    </header>
  );
};
