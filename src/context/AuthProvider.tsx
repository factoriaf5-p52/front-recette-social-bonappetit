import axios from "axios";
import { useState, useEffect, createContext } from "react";
import userServices from "../services/userServices";
import jwt_decode from "jwt-decode";

interface AuthContextType {
  auth: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  username: string;
  email: string;
}

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [auth, setAuth] = useState<User | null>(null);

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     }
      //   };

      const decodedToken: { username: string; email: string } =
        jwt_decode(token);

      const authData = {
        username: decodedToken.username,
        email: decodedToken.email,
      };

      try {
        setAuth(authData);
      } catch (error) {
        console.log(error);
        setAuth(null);
      }
    };
    authenticateUser();
  }, []);

  const login = (email: string, password: string) => {
    // Lógica para iniciar sesión y obtener el usuario
    const user: User = { username: "John Doe", email };
    setAuth(user);
  };

  const logout = () => {
    setAuth(null);
  };
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
