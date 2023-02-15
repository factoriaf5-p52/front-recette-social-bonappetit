import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import iconHome from "../../assets/iconhome.svg";
import iconSearch from "../../assets/iconsearch.svg";
import iconStatistics from "../../assets/iconchart.svg";
import iconSocial from "../../assets/iconnotice.svg";
import iconProfile from "../../assets/iconprofile.svg";
import iconLogo from "../../assets/logo.svg";
import iconUserNav from "../../assets/usernav.svg";

const Navigation = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };
  const handleClickUser = () => {
    navigate("/profile");
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
          </ul>
          <img onClick={handleClickUser} src={iconUserNav} alt="User" />
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
