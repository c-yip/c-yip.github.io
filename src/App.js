import "./App.css";
import React, { useContext } from "react";
import Header from "./components/Header";
import { Context } from "./Context";

import profilePhoto from "./img/profile-photo.png";
import htmlIcon from "./img/html-icon.svg";
import cssIcon from "./img/css-icon.svg";
import jsIcon from "./img/js-icon.svg";
import bootstrapIcon from "./img/bootstrap-icon.svg";
import reactIcon from "./img/react-icon.svg";
import gitIcon from "./img/git-icon.svg";
import githubIcon from "./img/GitHub-Mark-Light-120px-plus.png";
import jestIcon from "./img/jest-icon.svg";
import aboutPhoto from "./img/suit.jpg";

import shoppingCartGif from "./img/portfolio-gifs/shopping-cart-short.gif";
import cvGif from "./img/portfolio-gifs/cv.gif";
import tvGif from "./img/portfolio-gifs/tv-trivia.gif";
import battleshipGif from "./img/portfolio-gifs/battleship.gif";
import weatherGif from "./img/portfolio-gifs/weather-app.gif";
import todoGif from "./img/portfolio-gifs/todo.gif";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const { navOpenClass } = useContext(Context);

  return (
    <div className={`App + ${navOpenClass}`}>
      <Header />
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Christian Yip</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          front-end developer
        </p>
        <img src={profilePhoto} alt="" className="intro__img" />
      </section>

      <section className="my-skills">
        <h2 className="section__title section__title--my-skills">
          My skill-set
        </h2>
        <br />
        <div className="skill-container">
          <div className="skill zoom">
            <img src={htmlIcon} alt="HTML5 icon" className="skill__img" />
            <h3 className="skill-text">HTML5</h3>
          </div>

          <div className="skill zoom">
            <img src={cssIcon} alt="CSS3 icon" className="skill__img" />
            <h3 className="skill-text">CSS3</h3>
          </div>

          <div className="skill zoom">
            <img src={jsIcon} alt="JavaScript icon" className="skill__img" />
            <h3 className="skill-text">JavaScript</h3>
          </div>

          <div className="skill zoom">
            <img src={reactIcon} alt="React icon" className="skill__img" />
            <h3 className="skill-text">React</h3>
          </div>

          <div className="skill zoom">
            <img
              src={bootstrapIcon}
              alt="Bootstrap icon"
              className="skill__img"
            />
            <h3 className="skill-text">Bootstrap</h3>
          </div>

          <div className="skill zoom">
            <img src={gitIcon} alt="Git icon" className="skill__img" />
            <h3 className="skill-text">Git</h3>
          </div>

          <div className="skill zoom">
            <img src={githubIcon} alt="GitHub icon" className="skill__img" />
            <h3 className="skill-text">GitHub</h3>
          </div>

          <div className="skill zoom">
            <img src={jestIcon} alt="Jest icon" className="skill__img" />
            <h3 className="skill-text">Jest</h3>
          </div>
        </div>
        <br />

        <a href="#projects" className="btn">
          My projects
        </a>
      </section>

      <section className="about-me">
        <h2 className="section__title section__title--about-me">About me</h2>
        <p className="section__subtitle section__subtitle--about-me">
          Front-end developer & attorney based out of SoCal
        </p>

        <div className="about-me__body">
          <p>
            Earlier this year, I decided to switch my focus in life from
            advising and advocating for others as an attorney to building
            software. I am a front-end developer with a passion for building
            dynamic websites and web applications and a hunger to learn and
            improve.
          </p>

          <p>
            Through my years of working in a fast-paced, stressful, and
            demanding environment, I have learned how to self-manage, work
            proactively, and self-teach to keep up with the ever-changing legal
            environment. My goal is to apply the analytical, problem-solving,
            and communication skills I developed as an attorney to a front-end
            developer position to connect people to technology in a seamless and
            impactful fashion.{" "}
          </p>
        </div>

        <img src={aboutPhoto} alt="me in suit" className="about-me__img" />
      </section>

      <section className="my-projects" id="projects">
        <h2 className="section__title section__title--my-projects">
          My projects
        </h2>
        <p class="section__subtitle section__subtitle--projects">
          A selection of my range of work
        </p>

        <div className="portfolio">
          <a
            href="https://github.com/c-yip/shopping-cart"
            className="portfolio__item"
          >
            <img
              src={shoppingCartGif}
              alt="gif of shopping cart app"
              className="portfolio__img"
            />
          </a>

          <a
            href="https://github.com/c-yip/cv-application-generator"
            className="portfolio__item"
          >
            <img
              src={cvGif}
              alt="gif of cv generator app"
              className="portfolio__img"
            />
          </a>

          <a
            href="https://github.com/c-yip/tv-trivia"
            className="portfolio__item"
          >
            <img
              src={tvGif}
              alt="gif of TV trivia app"
              className="portfolio__img"
            />
          </a>

          <a
            href="https://github.com/c-yip/battleship"
            className="portfolio__item"
          >
            <img
              src={battleshipGif}
              alt="gif of battleship app"
              className="portfolio__img"
            />
          </a>

          <a
            href="https://github.com/c-yip/weather-app"
            className="portfolio__item"
          >
            <img
              src={weatherGif}
              alt="gif of weather app"
              className="portfolio__img"
            />
          </a>

          <a
            href="https://github.com/c-yip/todo-list"
            className="portfolio__item"
          >
            <img
              src={todoGif}
              alt="gif of todo list app"
              className="portfolio__img"
            />
          </a>
        </div>
      </section>

      <footer className="footer">
        <ul className="footer-list">
          <li className="footer-list__item">
            <a href="mailto:christianyip92@gmail.com" className="footer__link">
              christianyip92@gmail
            </a>
          </li>
          <li className="footer-list__item">
            <a
              href="https://www.linkedin.com/in/c-yip"
              className="footer__link"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </li>
          <li className="footer-list__item">
            <a href="https://github.com/c-yip" className="footer__link">
              <GitHubIcon fontSize="large" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
