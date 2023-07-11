import React from "react";

import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Project from "./Project";
import Skills from "./Skills";
import AboutMe from "../Components/AboutMe";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Project />
      <Skills />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
