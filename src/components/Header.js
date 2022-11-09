import logo from "../img/logo.png";
import React, { useContext } from "react";
import { Context } from "../Context";

function Header() {
  const { navOpen, handleNavOpen } = useContext(Context);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <button
        className={navOpen ? "nav-toggle nav-open" : "nav-toggle"}
        aria-label="toggle navigation"
        onClick={handleNavOpen}
      >
        <span className="hamburger"></span>
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
