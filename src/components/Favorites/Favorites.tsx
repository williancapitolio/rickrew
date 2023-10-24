import { BiSolidStar } from "react-icons/bi";

import styles from "./Favorites.module.scss";

export const Favorites = () => {
  return (
    <div className={styles.favorites}>
      <BiSolidStar />
    </div>
  );
};
