import React from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <a href="">
        <img src={logo} alt="OkeanTech Logo" />
      </a>
      <div className="menus">
        <a href="#services">Services</a>
        <a href="#work">My Work</a>
        <a href="#about">About</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};
