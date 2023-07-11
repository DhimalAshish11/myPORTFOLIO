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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            sapiente? Id quibusdam illo ipsam dignissimos, distinctio suscipit
            veniam? Facere beatae nisi cupiditate eos harum praesentium
            doloribus iure natus illo quam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            pariatur quas animi excepturi reprehenderit.
          </p>
          <p>
            <h3>Hobbies</h3>
            <ul>
              <li>Singing</li>
              <li>Singing</li>
              <li>Singing</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
