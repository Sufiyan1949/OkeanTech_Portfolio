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
        <a href="">Services</a>
        <a href="">My Work</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};
