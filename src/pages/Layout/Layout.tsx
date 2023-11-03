import { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

import styles from "./Layout.module.scss";

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <main className={styles.layout}>
      <Outlet />
    </main>
  );
};
