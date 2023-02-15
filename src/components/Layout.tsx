import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

type Props = {};

export const Layout = (props: Props) => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
