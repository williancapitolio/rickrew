import styles from "./Subtitle.module.scss";

type SubtitleProps = {
  text: string;
};

export const Subtitle = ({ text }: SubtitleProps) => {
  return <h3 className={styles.subtitle}>{text}</h3>;
};
