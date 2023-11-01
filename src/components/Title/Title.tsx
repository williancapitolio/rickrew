import styles from "./Title.module.scss";

export const Title = () => {
  return (
    <h1 className={styles.title}>
      <span className={styles.titleSpan}>R</span>ic
      <span className={styles.titleSpan}>K</span>rew
    </h1>
  );
};
