import React from "react";

import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Project from "./Project";
import Skills from "./Skills";
import AboutMe from "../Components/AboutMe";
import ContactMe from "../Components/ContactMe";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Project />
      <Skills />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
