import { Link } from "react-router-dom";

import { useCatchRouteError } from "../../hooks/useCatchRouteError";

import { Title } from "../../components/Title";

import styles from "./DefaultError.module.scss";

export const DefaultError = () => {
  const errorMessage = useCatchRouteError();

  return (
    <section className={styles.default}>
      <section className={styles.defaultLogo}>
        <Title />
      </section>
      <section className={styles.defaultError}>
        <h2 className={styles.defaultErrorStatus}>404</h2>
        <p className={styles.defaultErrorText}>{errorMessage}</p>
        <Link to={"/"}>
          <button>Voltar para o Início</button>
        </Link>
      </section>
    </section>
  );
};
