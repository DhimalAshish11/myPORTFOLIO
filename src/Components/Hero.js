import "./HeroStyle.css";

import React from "react";
import HeroImg from "../assets/bg2.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { Link } from "react-router-dom";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Web-Designer", "Freelancer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="Hero">
        <div className="mask">
          <img className="hero-img" src={HeroImg} alt="HeroImg" />
        </div>
        <div className="content">
          <p>HI, I'M ASHISH DHIMAL</p>
          <h1>
            <span style={{ fontWeight: "bold", color: "white" }}>{text}</span>
            <Cursor cursorStyle=">" />
          </h1>

          <div className="BUTTONS">
            <Link to="/project" className="btn">
              project
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
