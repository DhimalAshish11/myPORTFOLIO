import React from "react";
import "./AboutMeStyle.css";
import profileImg from "../assets/no-bgprofile.jpg.png";
const AboutMe = () => {
  return (
    <section id="about-me" className="container">
      <div className="title">
        <h1 className="project-heading">ABOUT ME</h1>
      </div>
      <div className="about-me">
        <div className="myimg">
          <img src={profileImg} alt="my" width="100%" />
        </div>
        <div className="content">
          <p>
            Hello! I'm Ashish Dhimal, a MERN Stack Developer passionate about
            crafting awesome websites and applications. I'm your go-to person
            for all things MongoDB, Express.js, React, and Node.js.
          </p>

          <p>
            I bring data to life using MongoDB, build the server-side magic with
            Express.js, create stunning user interfaces with React, and make it
            all run smoothly with Node.js.
          </p>
          <p>
            <h3>Hobbies</h3>
            <ul className="hobbies">
              <li>Singing</li>
              <li>Coding</li>
              <li>Deisging</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
