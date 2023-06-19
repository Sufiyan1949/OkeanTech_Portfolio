import React from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";
import {Model} from "./ContactModel";

export const Navbar = () => {
  return (
    <div className="nav">
      <a href="">
        <img src={logo} alt="OkeanTech Logo" />
      </a>
      <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="500"
        className="menus"
      >
        <a href="#services">Services</a>
        <a href="#work">My Work</a>
        <a href="#about">About</a>
        <Model item={<a>Contact</a>}/>
      </div>
    </div>
  );
};
