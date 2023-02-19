import { Outlet, Navigate } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import useAuth from "../hooks/useAuth";

type Props = {};

export const PrivateLayout = (props: Props) => {
  const { auth } = useAuth();

  return (
    <>
      <Navigation />
      {auth?.username ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
