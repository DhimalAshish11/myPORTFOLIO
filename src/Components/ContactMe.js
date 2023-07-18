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

        <div className="connect">
          <Link to="/project" className="btn">
            Get In Touch
          </Link>
        </div>

        <div className="form">
          <section class="form">
            <div class="add-details">
              <form className="form-details">
                <label for="company-name">Company Name:</label> <br />
                <input
                  type="text"
                  id="institution-name"
                  name="institution-name"
                />
                <br />
                <br />
                <label for="name">Name:</label> <br />
                <input type="text" />
                <br />
                <br />
                <label for="email">Email:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <label for="phone">Grade:</label> <br />
                <input type="number" />
                <br />
                <br />
                <label for="message">Message:</label>
                <br />
                <textarea
                  name="description"
                  id="description"
                  cols="15"
                  rows="7"
                ></textarea>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
