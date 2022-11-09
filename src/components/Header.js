import logo from "../img/logo.png";
import React, { useContext } from "react";
import { Context } from "../Context";
import Switch from "@mui/material/Switch";

function Header() {
  const { navOpen, handleNavOpen, toggleDarkMode, darkModeBackground } =
    useContext(Context);

  const hamburgerColorNavOpen =
    darkModeBackground && !navOpen
      ? "hamburger dark-mode-background"
      : navOpen
      ? "hamburger nav-open"
      : "hamburger";

  return (
    <header className={`header ${darkModeBackground}`}>
      <div className="btn-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Switch defaultChecked color="warning" onClick={toggleDarkMode} />
      </div>

      <button
        className={navOpen ? "nav-toggle nav-open" : "nav-toggle"}
        aria-label="toggle navigation"
        onClick={handleNavOpen}
      >
        <span className={hamburgerColorNavOpen}></span>
      </button>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={handleNavOpen}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link" onClick={handleNavOpen}>
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={handleNavOpen}>
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link" onClick={handleNavOpen}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
