import styles from "./Subtitle.module.scss";

type SubtitleProps = {
  text: string;
};

export const Subtitle = ({ text }: SubtitleProps) => {
  return <h2 className={styles.subtitle}>{text}</h2>;
};
