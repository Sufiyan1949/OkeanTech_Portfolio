import React from "react";
import "./CtaSection.css";
import bg from "../assets/bg_effect_portfolio.svg";

export const CtaSection = () => {
  return (
    <div className="ctaContainer">
      <img src={bg} alt="Background Effect" />
      <div className="ctaContent">
        <h1
          data-aos="zoom-out-down"
          data-aos-offset="00"
          data-aos-delay="300"
          data-aos-duration="800"
          className="heading1"
        >
          Have Project in Your Mind? Let's Work Together
        </h1>
        <p
          data-aos="fade-in"
          data-aos-offset="00"
          data-aos-delay="500"
          data-aos-duration="600"
          className="body-txt"
        >
          Reach out to us today for a free consultation and let us bring your
          web vision to life
        </p>
        <button
          data-aos="zoom-out-up"
          data-aos-offset="00"
          data-aos-delay="500"
          data-aos-duration="600"
          className="btn"
        >
          Let's Start Your Project
        </button>
      </div>
    </div>
  );
};
