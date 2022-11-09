import React from "react";
import profilePhoto from "../img/profile-photo.png";

export function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Christian Yip</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end developer
      </p>
      <img src={profilePhoto} alt="" className="intro__img" />
    </section>
  );
}
