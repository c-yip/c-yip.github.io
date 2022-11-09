import React from "react";
import aboutPhoto from "../img/suit.jpg";

export function AboutSection() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about-me">About me</h2>
      <p className="section__subtitle section__subtitle--about-me">
        Front-end developer & attorney based out of SoCal
      </p>

      <div className="about-me__body">
        <p>
          Earlier this year, I decided to switch my focus in life from advising
          and advocating for others as an attorney to building software. I am a
          front-end developer with a passion for building dynamic websites and
          web applications and a hunger to learn and improve.
        </p>

        <p>
          Through my years of working in a fast-paced, stressful, and demanding
          environment, I have learned how to self-manage, work proactively, and
          self-teach to keep up with the ever-changing legal environment. My
          goal is to apply the analytical, problem-solving, and communication
          skills I developed as an attorney to a front-end developer position to
          connect people to technology in a seamless and impactful fashion.{" "}
        </p>
      </div>

      <img src={aboutPhoto} alt="me in suit" className="about-me__img" />
    </section>
  );
}
