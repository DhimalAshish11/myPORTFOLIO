import React from "react";
import "./ContactMeStyle.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactMe = () => {
  return (
    <section className="container ">
      <div className="title">
        <h1 className="project-heading">FIND ME ON:</h1>
      </div>

      <div className="social">
        <a href="">
          <FaFacebook
            size={70}
            style={{ color: "white", marginRight: "1.5rem" }}
          />{" "}
          <h5>ashishdhimal</h5>
        </a>
        <a href="">
          {" "}
          <FaLinkedin
            size={70}
            style={{ color: "white", marginRight: "1.5rem" }}
          />
          <h5>ashishdhimal</h5>
        </a>

        <a href="">
          {" "}
          <FaInstagram
            size={70}
            style={{ color: "white", marginRight: "1.5rem" }}
          />
          <h5>ashishdhimal</h5>
        </a>

        <a href="">
          {" "}
          <FaGithub
            size={70}
            style={{ color: "white", marginRight: "1.5rem" }}
          />
          <h5>ashishdhimal</h5>
        </a>
      </div>
      <div className="toForm">
        <h1 className="project-heading">OR</h1>

        <Link to="/project" className="btn">
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default ContactMe;
