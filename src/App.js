import "./App.css";
import Header from "./components/Header";
import profilePhoto from "./img/profile-photo.png";

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
        <div className="skill">
          <img src="" alt="" className="skill__img" />
          <h3></h3>
        </div>

        <div className="skill">
          <img src="" alt="" className="skill__img" />
          <h3></h3>
        </div>

        <div className="skill">
          <img src="" alt="" className="skill__img" />
          <h3></h3>
        </div>

        <a href="#projects" className="btn">
          My projects
        </a>
      </section>

      <section className="about-me">
        <h2 className="section__title section__title--about-me">About me</h2>
        <p className="section__subtitle section__subtitle--about-me"></p>
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
          <img src="" alt="LinkedIn icon" />
          LinkedIn
        </a>
        <a href="https://github.com/c-yip" className="footer__link">
          <img src="" alt="GitHub icon" />
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
