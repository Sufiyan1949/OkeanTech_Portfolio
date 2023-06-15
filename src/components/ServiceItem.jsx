import React, { useState } from "react";
import "./ServiceItem.css";
import bgEffect from "../assets/blurr_effect.png";

export const ServiceItem = ({ img, isRight, title, subtitle }) => {
  var [isMob, setIsMob] = useState(false);
  if (screen.width <= 480) isMob = true;
  
  window.addEventListener("resize", function (event) {
    setIsMob(screen.width <= 480)
  });


  return (
    <div
      className="serviceItem"
      style={
        !isMob
          ? {
              flexDirection: isRight ? "row-reverse" : "row",
              float: isRight && !isMob ? "Right" : "left",
            }
          : {}
      }
    >
      <div className="serviceLeft">
        <img className="bgEffect" src={bgEffect} alt="Background Effect" />
        <img className="art" src={img} alt="About Art Image" />
      </div>
      <div className="serviceRight">
        <div
          className="content"
          style={!isMob ? { float: isRight && !isMob ? "Right" : "left" } : {}}
        >
          <h1
            className="heading2"
            style={
              !isMob ? { textAlign: isRight && !isMob ? "right" : "left" } : {}
            }
          >
            {title}
          </h1>
          <p
            className="body-txt"
            style={
              !isMob ? { textAlign: isRight && !isMob ? "right" : "left" } : {}
            }
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
