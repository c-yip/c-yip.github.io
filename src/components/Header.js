import logo from "../img/logo.png";
import React, { useContext } from "react";
import { Context } from "../Context";

function Header() {
  const { handleNavOpen } = useContext(Context);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={() => handleNavOpen()}
      >
        <span className="hamburger"></span>
      </button>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
