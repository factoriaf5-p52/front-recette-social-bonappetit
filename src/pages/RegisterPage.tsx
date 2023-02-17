import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton/BackButton";
import Footer from "../components/Footer/Footer";
import FormAlert from "../components/FormAlert/FormAlert";
import validator from "validator";
import axios from "axios";

type Props = {};

// type Alert = {
//   msg: string;
//   isError: boolean;
// };

const RegisterPage = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [alert, setAlert] = useState<any>({});

  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if ([username, email, password, repassword].includes("")) {
      setAlert({ msg: "There is some empty input", isError: true });
      console.log("Error 1");
      return;
    }

    if (password !== repassword) {
      setAlert({ msg: "Password not coincident", isError: true });
      console.log("Error 2");
      return;
    }

    if (password.length < 8) {
      setAlert({ msg: "Password too short", isError: true });
      console.log("Error 3");
      return;
    }

    if (username.length < 5) {
      setAlert({ msg: "Username too short", isError: true });
      console.log("Error 4");
      return;
    }

    if (validator.isEmail(email)) {
      //Create user into Api
      try {
        const URL_BASE = "https://backendbonappetit.up.railway.app/api/v1/";
        const urlUsers = "users";
        const response = await axios.post(URL_BASE + urlUsers, {
          username,
          email,
          password,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      setAlert({});
      navigate("/auth/profile/" + username);
      console.log("New user registered");
    } else {
      setAlert({ msg: "Please, enter valid Email!", isError: true });
      return;
    }
  };

  const { msg } = alert;

  return (
    <>
      <section className="flex flex-col justify-center items-center ">
        <div className="bg-red md:bg-white px-10 py-8 flex  w-full">
          {isMobile ? <BackButton /> : ""}
          <h1 className="flex-1 w-64 text-white md:text-gray-dark font-bold text-2xl md:text-3xl text-center mb-4">
            Sign up
          </h1>
        </div>
        <div className="mx-14 flex justify-center max-w-7xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 md:mt-0 w-80">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="email"
                type="email"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="repassword"
              >
                Re-enter password
              </label>
              <input
                onChange={(e) => setRepassword(e.target.value)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="repassword"
                type="password"
                placeholder="******************"
              />
            </div>
            <p className="w-full my-6">
              If you click the Sign up button, you are considered to agree to
              the{" "}
              <Link to="/">
                <strong>Terms of Use</strong>
              </Link>{" "}
              and{" "}
              <Link to="/">
                <strong>Privacy Policy</strong>
              </Link>{" "}
              .
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-red hover:bg-green text-white py-2 px-24 rounded w-80"
              >
                Sign up
              </button>
            </div>
            {msg && <FormAlert alert={alert} />}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RegisterPage;
