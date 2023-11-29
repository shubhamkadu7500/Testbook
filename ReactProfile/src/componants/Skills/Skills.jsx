import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h1 className="section__title">Skills</h1>
      <span className="section__subtitle">My technical levels</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
