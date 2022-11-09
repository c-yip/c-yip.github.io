import "./App.css";
import React, { useContext } from "react";
import Header from "./components/Header";
import { Context } from "./Context";

import { SkillsSection } from "./components/SkillsSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";

function App() {
  const { navOpenClass } = useContext(Context);

  return (
    <div className={`App ${navOpenClass}`}>
      <Header />
      <Intro></Intro>

      <SkillsSection />

      <AboutSection />

      <PortfolioSection />

      <Footer />
    </div>
  );
}

export default App;
