import React from "react";
import "./ServiceSection.css";
import web from "../assets/web_art.png";
import uiux from "../assets/uiux_art.png";
import app from "../assets/mobile_app_art.png";
import cms from "../assets/cms_art.png";
import ecom from "../assets/ecommerce_art.png";
import { ServiceItem } from "./ServiceItem";

export const ServiceSection = () => {
  return (
    <div id="services" className="servicesContainer">
      <h1
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="600"
        className="heading1"
      >
        Services
      </h1>
      <p
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="150"
        data-aos-duration="600"
        className="body-txt"
      >
        Following are some services that we offer, However you can contact us if
        you need any specific service.
      </p>
      <div className="servicesItemContainer">
        <ServiceItem
          img={web}
          isRight={false}
          title="Web Development"
          subtitle="we build custom websites that align with your brand identity, optimize user experience, and drive business growth. From responsive designs to complex e-commerce solutions, we have the expertise to turn your vision into a reality."
        />
        <ServiceItem
          img={uiux}
          isRight={true}
          title="UI/UX Designing"
          subtitle="Our talented designers excel at creating intuitive, visually appealing interfaces that enhance user engagement and conversion rates. We carefully craft each element, ensuring seamless navigation, captivating visuals, and a delightful user experience across all devices."
        />
        <ServiceItem
          img={app}
          isRight={false}
          title="Mobile App Development"
          subtitle="Extend your digital footprint to the mobile world with our bespoke mobile app development services. From iOS to Android, we build powerful and user-friendly mobile applications that help you connect with your customers on the go."
        />
        <ServiceItem
          img={cms}
          isRight={true}
          title="CMS Development"
          subtitle="Take control of your website content with our custom content management system (CMS) development services. We empower you with an easy-to-use back-end interface, allowing you to update and manage your website effortlessly."
        />
        <ServiceItem
          img={ecom}
          isRight={false}
          title="E-commerce Solutions"
          subtitle="Transform your online business with our scalable e-commerce solutions. Whether you're starting a new online store or upgrading your existing platform, we develop secure and feature-rich e-commerce websites that drive sales and streamline operations."
        />
      </div>
    </div>
  );
};
