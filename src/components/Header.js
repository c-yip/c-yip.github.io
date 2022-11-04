import logo from "../img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button className="nav-toggle" aria-label="toggle navigation"></button>
      <span className="hamburger">
        <MenuIcon />
      </span>
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
