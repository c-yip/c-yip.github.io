import React from "react";
import htmlIcon from "../img/html-icon.svg";
import cssIcon from "../img/css-icon.svg";
import jsIcon from "../img/js-icon.svg";
import bootstrapIcon from "../img/bootstrap-icon.svg";
import reactIcon from "../img/react-icon.svg";
import gitIcon from "../img/git-icon.svg";
import githubIcon from "../img/GitHub-Mark-Light-120px-plus.png";
import jestIcon from "../img/jest-icon.svg";

export function SkillsSection() {
  return (
    <section className="my-skills" id="skills">
      <h2 className="section__title section__title--my-skills">My skill-set</h2>
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
  );
}
