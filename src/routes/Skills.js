import React from "react";
import git from "../Logos/githuub.jpg.png";
import nodejs from "../Logos/node.jpg.png";
import rct from "../Logos/react.jpg.png";
import red from "../Logos/redux.jpg.png";
import mongo from "../Logos/mongo.jpg.png";
import JS from "../Logos/javascript.js.png";
import "./MySkillStyle.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
export const Skills = () => {
  return (
    <div className="skill-container">
      <NavBar />
      <h1 className="project-heading">SKILLS</h1>
      <div className="Logo">
        <div className="logo-slide">
          <img src={git} alt="" />
          <img src={nodejs} alt="" />
          <img src={rct} alt="" />
          <img src={red} alt="" />
          <img src={mongo} alt="" />
          <img src={JS} alt="" />

          <img src={git} alt="" />
          <img src={nodejs} alt="" />
          <img src={rct} alt="" />
          <img src={red} alt="" />
          <img src={mongo} alt="" />
          <img src={JS} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
