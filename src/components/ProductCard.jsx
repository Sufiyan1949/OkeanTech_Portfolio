import React from "react";
import img from "../assets/product.png";
import img2 from "../assets/arrow.svg";
import "./ProductCard.css";

export const ProductCard = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="100"
      data-aos-delay="600"
      data-aos-duration="800"
      className="ProductCard"
    >
      <img src={img} alt="Product Image" />
      <div className="textContainer">
        <div>
          <h3 className="heading3">Project Name</h3>
          <p className="small-txt">short description of a project</p>
        </div>
        <img src={img2} alt="right arrow icon" />
      </div>
    </div>
  );
};
