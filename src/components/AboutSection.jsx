import React from "react";
import "./AboutSection.css";
import bgEffect from "../assets/left_art_effect.png";
import aboutArt from "../assets/left_art_c.png";
import {Model} from "./ContactModel";

export const AboutSection = () => {
  return (
    <div id="about" className="aboutContainer">
      <div
        data-aos="fade-in"
        data-aos-offset="50"
        data-aos-delay="100"
        data-aos-duration="600"
        className="aboutLeft"
      >
        <img className="bgEffect" src={bgEffect} alt="Background Effect" />
        <img className="bgArt" src={aboutArt} alt="About Art Image" />
      </div>
      <div className="aboutRight">
        <div className="content">
          <h1
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            className="heading1"
          >
            Who We Are?
          </h1>
          <p
            data-aos="fade-in"
            data-aos-offset="100"
            data-aos-delay="300"
            data-aos-duration="600"
            className="body-txt"
          >
            We are a visionary website and mobile application development agency
            that is passionately dedicated to crafting top-tier digital
            experiences. Our mission is to empower businesses like yours with
            cutting-edge websites and applications that drive growth and elevate
            your brand to new heights.
          </p>
          <p
            data-aos="fade-in"
            data-aos-offset="100"
            data-aos-delay="300"
            data-aos-duration="600"
            className="body-txt"
          >
            In ever-evolving digital landscape, we understand the significance
            of a powerful online presence. That's why our team of skilled
            professionals brings together the perfect blend of technical
            expertise and creative finesse to deliver awe-inspiring solutions
            that captivate audiences and propel businesses forward.
          </p>
          <Model
            item={
              <button
                data-aos="zoom-in"
                data-aos-offset="00"
                data-aos-delay="300"
                data-aos-duration="600"
                className="btn"
              >
                GET IN TOUCH
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
};
