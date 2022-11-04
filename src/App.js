import "./App.css";
import Header from "./components/Header";

import profilePhoto from "./img/profile-photo.png";
import htmlIcon from "./img/html-icon.svg";
import cssIcon from "./img/css-icon.svg";
import jsIcon from "./img/js-icon.svg";
import bootstrapIcon from "./img/bootstrap-icon.svg";
import reactIcon from "./img/react-icon.svg";
import gitIcon from "./img/git-icon.svg";
import githubIcon from "./img/github-icon.svg";
import jestIcon from "./img/jest-icon.svg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <div className="App">
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

        <div className="skill-container">
          <div className="skill">
            <img src={htmlIcon} alt="HTML5 icon" className="skill__img" />
            <h3>HTML5</h3>
          </div>

          <div className="skill">
            <img src={cssIcon} alt="CSS3 icon" className="skill__img" />
            <h3>CSS3</h3>
          </div>

          <div className="skill">
            <img src={jsIcon} alt="JavaScript icon" className="skill__img" />
            <h3>JavaScript</h3>
          </div>

          <div className="skill">
            <img src={reactIcon} alt="React icon" className="skill__img" />
            <h3>React</h3>
          </div>

          <div className="skill">
            <img
              src={bootstrapIcon}
              alt="Bootstrap icon"
              className="skill__img"
            />
            <h3>Bootstrap</h3>
          </div>

          <div className="skill">
            <img src={gitIcon} alt="Git icon" className="skill__img" />
            <h3>Git</h3>
          </div>

          <div className="skill">
            <img src={githubIcon} alt="GitHub icon" className="skill__img" />
            <h3>GitHub</h3>
          </div>

          <div className="skill">
            <img src={jestIcon} alt="Jest icon" className="skill__img" />
            <h3>Jest</h3>
          </div>
        </div>

        <a href="#projects" className="btn">
          My projects
        </a>
      </section>

      <section className="about-me">
        <h2 className="section__title section__title--about-me">About me</h2>
        <p className="section__subtitle section__subtitle--about-me">
          Earlier this year, I decided to switch my focus in life from advising
          and advocating for others as an attorney to building software. I am a
          frontend developer with a passion for building dynamic websites and
          web applications and a hunger to learn and improve. Through my years
          of working in a fast-paced, stressful, and demanding environment, I
          have learned how to self-manage, work proactively, and self-teach to
          keep up with the ever-changing legal environment. My goal is to apply
          the analytical, problem-solving, and communication skills I developed
          as an attorney to a frontend developer position to connect people to
          technology in a seamless and impactful fashion.{" "}
        </p>
      </section>

      <section className="my-projects" id="projects">
        <h2 className="section__title section__title--my-projects">
          My projects
        </h2>
        <div className="portfolio">
          <a href="" className="portfolio__item">
            <img src="" alt="" className="portfolio__img" />
          </a>

          <a href="" className="portfolio__item">
            <img src="" alt="" className="portfolio__img" />
          </a>

          <a href="" className="portfolio__item">
            <img src="" alt="" className="portfolio__img" />
          </a>

          <a href="" className="portfolio__item">
            <img src="" alt="" className="portfolio__img" />
          </a>

          <a href="" className="portfolio__item">
            <img src="" alt="" className="portfolio__img" />
          </a>
        </div>
      </section>

      <footer>
        <a href="mailto:christianyip92@gmail.com" className="footer__link">
          christianyip92@gmail
        </a>
        <a href="https://www.linkedin.com/in/c-yip" className="footer__link">
          <LinkedInIcon />
          LinkedIn
        </a>
        <a href="https://github.com/c-yip" className="footer__link">
          <GitHubIcon />
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
