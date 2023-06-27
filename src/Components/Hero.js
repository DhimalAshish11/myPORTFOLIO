import "./HeroStyle.css";

import React from "react";
import HeroImg from "../assets/bg2.jpg";

import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="Hero">
        <div className="mask">
          <img className="hero-img" src={HeroImg} alt="HeroImg" />
        </div>
        <div className="content">
          <p>HI, I'M ASHISH DHIMAL</p>
          <h1>FRONT-END DEVELOPER</h1>

          <div>
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
