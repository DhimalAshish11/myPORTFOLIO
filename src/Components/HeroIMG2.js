import "./HeroIMGStyle.css";

import React from "react";

const HeroIMG2 = ({ heading, text }) => {
  return (
    <div className="HeroIMG2">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroIMG2;
