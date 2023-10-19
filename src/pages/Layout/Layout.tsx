import { Outlet } from "react-router-dom";

import { Title } from "../../components/Title";

export const Layout = () => {
  return (
    <>
      <Title />
      <main>
        <Outlet />
      </main>
    </>
  );
};
