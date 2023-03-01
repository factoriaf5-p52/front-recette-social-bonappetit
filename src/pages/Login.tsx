import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton/BackButton";
import Footer from "../components/Footer/Footer";
import { loginUser } from "../services/userServices";
import useAuth from "../hooks/useAuth";
import FormAlert from "../components/FormAlert/FormAlert";
import SectionTitle from "../components/SectionTitle/SectionTitle";

type Props = {};

const LoginPage = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState<any>({});

  const { auth, setAuth } = useAuth();

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

    //Form validation

    if ([email, password].includes("")) {
      console.log("there is some empty input");
      return;
    }

    //Validate with API
    await loginUser({
      password,
      email,
    })
      .then(async (response) => {
        const { user } = response;
        setAuth(user);
        setAlert({
          msg: "Login succesfully! You are going to be redirected to homepage",
          isError: false,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log("Error when trying to login: ", error);
        setAlert({ msg: "Login wrong", isError: true });
      });

    console.log("clickado");
  };

  const { msg } = alert;

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <SectionTitle text="Login" />
        <div className="mx-14 flex justify-center max-w-7xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 md:mt-0 w-80">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="username"
                type="text"
                placeholder="your@email.com"
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
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-red hover:bg-green text-white py-2 px-24 w-80 rounded"
              >
                Log in
              </button>
            </div>
            {msg && <FormAlert alert={alert} />}
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
      <Footer />
    </>
  );
};

export default LoginPage;
