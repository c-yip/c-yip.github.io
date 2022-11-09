import "./App.css";
import React, { useContext } from "react";
import Header from "./components/Header";
import { Context } from "./Context";

import profilePhoto from "./img/profile-photo.png";

import { SkillsSection } from "./components/SkillsSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { Footer } from "./components/Footer";

function App() {
  const { navOpenClass } = useContext(Context);

  return (
    <div className={`App ${navOpenClass}`}>
      <Header />
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Christian Yip</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          front-end developer
        </p>
        <img src={profilePhoto} alt="" className="intro__img" />
      </section>

      <SkillsSection />

      <AboutSection />

      <PortfolioSection />

      <Footer></Footer>
    </div>
  );
}

export default App;
