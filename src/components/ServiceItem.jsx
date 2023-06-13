import React from "react";
import "./ServiceItem.css";
import bgEffect from "../assets/blurr_effect.png";

export const ServiceItem = ({ img, isRight, title, subtitle }) => {
  return (
    <div
      className="serviceItem"
      style={{ flexDirection: isRight ? "row-reverse" : "row" , float: isRight? 'Right':'left'}}
    >
      <div className="serviceLeft">
        <img className="bgEffect" src={bgEffect} alt="Background Effect" />
        <img className="art" src={img} alt="About Art Image" />
      </div>
      <div className="serviceRight">
        <div className="content" style={{float: isRight? 'Right':'left'}}>
          <h1
            className="heading2"
            style={{ textAlign: isRight ? "right" : "left" }}
          >
            {title}
          </h1>
          <p
            className="body-txt"
            style={{ textAlign: isRight ? "right" : "left" }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
