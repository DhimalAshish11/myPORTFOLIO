import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroIMG2 from "../Components/HeroIMG2";

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroIMG2 heading="About Me" text="This is about me" />
      <Footer />
    </div>
  );
};

export default About;
