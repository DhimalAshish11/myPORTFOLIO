import "./NavBarStyle.css";
import { Link as ScrollLink } from "react-scroll";

import { FaBars, FaTimes, FaFilePdf } from "react-icons/fa";

import React, { useState } from "react";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleOnCLick = () => setClick(!click);

  const resumeLink =
    "https://drive.google.com/file/d/15dx6pTT_KnOLMF7BWBaaLlO-YAJ_coSi/view?usp=drive_link";

  return (
    <div className="Header">
      <ScrollLink to="home" smooth={true} duration={1000}>
        <h1>PORTFOLIO</h1>
      </ScrollLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <ScrollLink to="home" smooth={true} duration={1000}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="skills" smooth={true} duration={1000}>
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="project" smooth={true} duration={1000}>
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={1000}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={1000}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      <div className="resume-icons">
        {/* Animated Resume Icon */}
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" download>
          <FaFilePdf size={30} style={{ color: "white", margin: "0 10px" }} />
        </a>
      </div>

      <div className="hamburger" onClick={handleOnCLick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
