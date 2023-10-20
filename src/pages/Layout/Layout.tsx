import { Outlet } from "react-router-dom";

import { Title } from "../../components/Title";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Title />
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  );
};
