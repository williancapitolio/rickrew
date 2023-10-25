import { useNavigate } from "react-router-dom";

import styles from "./Title.module.scss";

export const Title = () => {
  const navigate = useNavigate();

  return (
    <h1 className={styles.title} onClick={() => navigate("/")}>
      <span className={styles.titleSpan}>R</span>ic
      <span className={styles.titleSpan}>K</span>rew
    </h1>
  );
};
