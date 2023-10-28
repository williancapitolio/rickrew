import { NavLink } from "react-router-dom";

import { BiSolidStar } from "react-icons/bi";

import styles from "./Favorites.module.scss";

export const Favorites = () => {
  return (
    <NavLink to={"/favorites"}>
      <div className={styles.favorites}>
        <BiSolidStar className={styles.favoritesSvg} />
      </div>
    </NavLink>
  );
};
