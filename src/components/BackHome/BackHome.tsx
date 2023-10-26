import { NavLink } from "react-router-dom";

import styles from "./BackHome.module.scss";

export const BackHome = () => {
  return (
    <NavLink to={"/"} className={styles.backHome}>
      <span className={styles.backHomeArrow}>&lt;</span> Voltar
    </NavLink>
  );
};
