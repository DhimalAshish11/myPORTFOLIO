import React from "react";
import { Element } from "react-scroll";
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
      <Element name="home">
        <NavBar />
        <Hero />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>

      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="contact">
        <ContactMe />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
