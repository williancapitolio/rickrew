import { Outlet } from "react-router-dom";

import { useScrollToTop } from "../../hooks/useScrollToTop";

import styles from "./Layout.module.scss";

export const Layout = () => {
  useScrollToTop();

  return (
    <main className={styles.layout}>
      <Outlet />
    </main>
  );
};
