import { Link } from "react-router-dom";
import "./NavBarStyle.css";

import { FaBars, FaTimes } from "react-icons/fa";

import React, { useState } from "react";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleOnCLick = () => setClick(!click);

  return (
    <div className="Header">
      <Link to={"/"}>
        <h1>PORTFOLIO</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/project">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

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
