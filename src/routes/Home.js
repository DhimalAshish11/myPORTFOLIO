import React from "react";

import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Project from "./Project";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
