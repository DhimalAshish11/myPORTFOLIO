// AboutMe.js

import React from "react";
import "./AboutMeStyle.css";
import profileImg from "../assets/no-bgprofile.jpg.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-container">
      <div className="title">
        <h1 className="project-heading">ABOUT ME</h1>
      </div>
      <div className="about-content" data-aos="fade-up">
        <div
          className="profile-img-container"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img src={profileImg} alt="my" className="profile-image" />
        </div>
        <div className="text-content">
          <p className="about-text">
            Hello! I'm Ashish Dhimal, a MERN Stack Developer passionate about
            crafting awesome websites and applications. I'm your go-to person
            for all things MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="about-text">
            I bring data to life using MongoDB, build the server-side magic with
            Express.js, create stunning user interfaces with React, and make it
            all run smoothly with Node.js.
          </p>
          <div className="hobbies">
            <h3>Hobbies</h3>
            <ul>
              <li>Singing</li>
              <li>Coding</li>
              <li>Designing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
