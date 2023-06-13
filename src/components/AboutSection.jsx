import React from "react";
import './AboutSection.css'
import bgEffect from "../assets/left_art_effect.png";
import aboutArt from "../assets/left_art_c.png";

export const AboutSection = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutLeft">
        <img className="bgEffect" src={bgEffect} alt="Background Effect" />
        <img className="bgArt" src={aboutArt} alt="About Art Image" />
      </div>
      <div className="aboutRight">
        <div className="content">
          <h1 className="heading1">Who We Are?</h1>
          <p className="body-txt">
            We are a visionary website and mobile application development agency
            that is passionately dedicated to crafting top-tier digital
            experiences. Our mission is to empower businesses like yours with
            cutting-edge websites and applications that drive growth and elevate
            your brand to new heights.
          </p>
          <p className="body-txt">
            In ever-evolving digital landscape, we understand the significance
            of a powerful online presence. That's why our team of skilled
            professionals brings together the perfect blend of technical
            expertise and creative finesse to deliver awe-inspiring solutions
            that captivate audiences and propel businesses forward.
          </p>
          <button className="btn">GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
};
