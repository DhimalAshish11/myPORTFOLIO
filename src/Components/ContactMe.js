import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMeStyle.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactMe = () => {
  const formRef = useRef();
  const [formDt, setFormDt] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formDt);

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        formRef.current, // Pass the form element directly
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  return (
    <section className="container">
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

        <section className="form">
          <div className="add-details">
            <form ref={formRef} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="name" onChange={handleOnChange} />
              <label>Email</label>
              <input type="email" name="email" onChange={handleOnChange} />
              <label>Message</label>
              <textarea name="message" onChange={handleOnChange} />
              <button type="button" onClick={sendEmail}>
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactMe;
