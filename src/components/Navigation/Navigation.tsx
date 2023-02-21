import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import iconHome from "../../assets/iconhome.svg";
import iconSearch from "../../assets/iconsearch.svg";
import iconStatistics from "../../assets/iconchart.svg";
import iconSocial from "../../assets/iconnotice.svg";
import iconProfile from "../../assets/iconprofile.svg";
import iconLogo from "../../assets/logo.svg";
import iconUserNav from "../../assets/usernav.svg";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { auth } = useAuth();

  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };
  const handleClickUser = () => {
    navigate("/login");
  };

  return (
    <>
      <header className={styles.HeaderDesktop}>
        <nav>
          <img onClick={handleClickLogo} src={iconLogo} alt="Logo" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/social">Social</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            {auth?.username && (
              <li>
                <NavLink to="/post">New Recipe</NavLink>
              </li>
            )}
          </ul>
          <div className="flex flex-col">
            <img
              className="h-6"
              onClick={handleClickUser}
              src={iconUserNav}
              alt="User"
            />
            <p onClick={handleClickUser} className="text-sm">
              {auth?.username ? auth.username : "login"}
            </p>
          </div>
        </nav>
      </header>

      <nav className={styles.HeaderMobile}>
        <ul>
          <li>
            <NavLink to="/">
              <img src={iconHome} alt="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/recipes">
              <img src={iconSearch} alt="Search" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics">
              <img src={iconStatistics} alt="Statistics" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/social">
              <img src={iconSocial} alt="Social" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <img src={iconProfile} alt="Profile" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
