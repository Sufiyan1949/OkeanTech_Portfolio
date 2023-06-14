import React from "react";
import './Footer.css'
import github from "../assets/ic_github.svg";
import twitter from "../assets/ic_twitter.svg";
import linkedin from "../assets/ic_linkedin.svg";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="body-txt">© 2023 OkeanTech | All rights reserved</p>
      <div className="socials">
        <a href="">
          <img src={twitter} alt="social icons" />
        </a>
        <a href="">
          <img src={linkedin} alt="social icons" />
        </a>
        <a href="">
          <img src={github} alt="social icons" />
        </a>
      </div>
    </div>
  );
};
