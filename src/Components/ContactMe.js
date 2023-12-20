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
        <a href="https://www.facebook.com/ashishyongyang.kamal/">
          <FaFacebook
            size={70}
            style={{ color: "white", marginRight: "1.5rem" }}
          />{" "}
          <h5>ashishdhimal</h5>
        </a>
        <a href="https://www.linkedin.com/in/ashish-dhimal?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bit2%2F%2Fe9YTNqzjkolCCHxUQ%3D%3D">
          {" "}
          <FaLinkedin
            size={70}
            style={{ color: "white", marginRight: "1.5rem" }}
          />
          <h5>ashishdhimal</h5>
        </a>

        <a href="https://www.instagram.com/yonyangkamal/">
          {" "}
          <FaInstagram
            size={70}
            style={{ color: "white", marginRight: "1.5rem" }}
          />
          <h5>ashishdhimal</h5>
        </a>

        <a href="https://github.com/DhimalAshish11">
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
