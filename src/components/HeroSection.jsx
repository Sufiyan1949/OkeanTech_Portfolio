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
            <h1
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-delay="300"
              data-aos-duration="800"
              className="heading1"
            >
              Crafting Success with Creative Web Solutions
            </h1>
            <p
              data-aos="fade-in"
              data-aos-offset="0"
              data-aos-delay="800"
              data-aos-duration="600"
              className="body-txt"
            >
              We are specialize in crafting stunning applications and websites
              that captivate audiences and elevate brands to new heights.
            </p>
            <button
              data-aos="fade-in"
              data-aos-offset="00"
              data-aos-delay="800"
              data-aos-duration="600"
              className="btn"
            >
              GET IN TOUCH
            </button>
            <a
              data-aos="fade-in"
              data-aos-offset="00"
              data-aos-delay="800"
              data-aos-duration="600"
              className="btnSecondary"
              href="#work"
            >
              VIEW ALL WORK
            </a>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-offset="10"
          data-aos-delay="1000"
          data-aos-duration="600"
          className="heroRight"
        >
          <img className="bgEffect" src={bgCircle} alt="Background Effect" />
          <img className="bgArt" src={rightArt} alt="hero Art Image" />
        </div>
      </div>
    </div>
  );
};
