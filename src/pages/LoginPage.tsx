import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../components/BackButton/BackButton";

type Props = {};

const LoginPage = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      console.log("there is some empty input");
      return;
    }

    console.log("clickado");
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="bg-red md:bg-white px-10 py-8 flex  w-full">
        {isMobile ? <BackButton /> : ""}
        <h1 className="flex-1 w-64 text-white md:text-gray-dark font-bold text-2xl md:text-3xl text-center mb-4">
          Login
        </h1>
      </div>
      <div className="mx-14 flex justify-center max-w-7xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 md:mt-0">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-red hover:bg-green text-white py-2 px-24 rounded"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-7xl mx-14 my-16 flex justify-center">
        <h2>
          Not registered yet?{" "}
          <Link className="hover:text-green" to="/register">
            Sign Up
          </Link>
        </h2>
      </div>
    </section>
  );
};

export default LoginPage;
