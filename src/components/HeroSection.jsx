import React from "react";
import "./HeroSection.css";
import { Navbar } from "./Navbar";
import rightArt from "../assets/right_art.svg";
import bgCircle from "../assets/bg_circles.png";

export const HeroSection = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="heroContent">
        <div className="heroLeft">
          <div className="content">
            <h1 className="heading1">
              Crafting Success with Creative Web Solutions
            </h1>
            <p className="body-txt">
              We are specialize in crafting stunning applications and websites
              that captivate audiences and elevate brands to new heights.
            </p>
            <button className="btn">GET IN TOUCH</button>
            <button className="btnSecondary">VIEW ALL WORK</button>
          </div>
        </div>
        <div className="heroRight">
          <img className="bgEffect" src={bgCircle} alt="Background Effect" />
          <img className="bgArt" src={rightArt} alt="hero Art Image" />
        </div>
      </div>
    </div>
  );
};
