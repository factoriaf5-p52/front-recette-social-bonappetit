import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const AuthProfilePage = (props: Props) => {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // const confirmAccount = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://backendbonappetit.up.railway.app/users/${id}`
    //     );
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // confirmAccount();
  }, []);

  return <div>AuthProfilePage with ID: {id}</div>;
};

export default AuthProfilePage;
