import { useNavigate } from "react-router-dom";

import styles from "./BackHome.module.scss";

export const BackHome = () => {
  const navigate = useNavigate();

  return (
    <a onClick={() => navigate(-1)} className={styles.backHome}>
      <span className={styles.backHomeArrow}>&lt;</span> Voltar
    </a>
  );
};
