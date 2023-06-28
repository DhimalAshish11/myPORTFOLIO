import "./WorkCardStyle.css";
import { NavLink } from "react-router-dom";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            DEMO
          </NavLink>
          <NavLink to="url.com" className="btn">
            SOURCE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
