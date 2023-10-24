import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  );
};
