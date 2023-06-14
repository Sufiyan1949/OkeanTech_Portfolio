import React from "react";
import './CtaSection.css'
import bg from "../assets/bg_effect_portfolio.svg";

export const CtaSection = () => {
  return (
    <div className="ctaContainer">
      <img src={bg} alt="Background Effect" />
      <div className="ctaContent">
        <h1 className="heading1">
          Have Project in Your Mind? Let's Work Together
        </h1>
        <p className="body-txt">
          Reach out to us today for a free consultation and let us bring your
          web vision to life
        </p>
        <button className="btn">Let's Start Your Project</button>
      </div>
    </div>
  );
};
