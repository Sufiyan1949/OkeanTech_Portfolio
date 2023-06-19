import React from "react";
import "./PortfolioSection.css";
import { ProductCard } from "./ProductCard";
import bg from "../assets/bg_effect_portfolio.svg";

export const PortfolioSection = () => {
  return (
    <div id="work" className="PortfolioContainer">
      <img src={bg} alt="background effect" />
      <div className="PortfolioContent">
        <h1
          data-aos="fade-right"
          data-aos-offset="00"
          data-aos-delay="100"
          data-aos-duration="600"
          className="heading1"
        >
          OkeanTech Portfolio
        </h1>
        <p
          data-aos="fade-left"
          data-aos-offset="00"
          data-aos-delay="100"
          data-aos-duration="600"
          className="body-txt"
        >
          some projects that we work on
        </p>
        <div className="ProductCardGrid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
