import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroIMG2 from "../Components/HeroIMG2";
import Work from "../Components/Work";

export const Project = () => {
  return (
    <div>
      <NavBar />
      {/*  <HeroIMG2 heading="PROJECTS" text="My recents Works" /> */}
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
