import styles from "./Title.module.scss";

export const Title = () => {
  return (
    <>
      <h1 className={styles.wrapper}>
        <span className={styles.wrapperSpan}>R</span>ic
        <span className={styles.wrapperSpan}>K</span>rew
      </h1>
    </>
  );
};
