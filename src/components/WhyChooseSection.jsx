import React from "react";
import "./WhyChooseSection.css";
import { WhyCard } from "./WhyCard";
import cb from "../assets/cb.png";
import cs from "../assets/cs.png";
import tc from "../assets/tc.png";
import td from "../assets/td.png";
import os from "../assets/os.png";

export const WhyChooseSection = () => {
  return (
    <div className="whyChooseContainer">
      <h1
        data-aos="fade-down"
        data-aos-offset="150"
        data-aos-delay="400"
        data-aos-duration="700"
        className="heading1"
      >
        Why Choose Us
      </h1>
      <div className="whyCardGrid">
        <WhyCard
          img={cb}
          title="Creative Brilliance"
          subtitle="We infuse our projects with a touch of artistry, ensuring your website stands out from the crowd."
        />
        <WhyCard
          img={cs}
          title="Custom Solutions"
          subtitle="No two businesses are alike, which is why we tailor our web solutions to suit your unique requirements."
        />
        <WhyCard
          img={tc}
          title="Transparent Communication"
          subtitle="We believe in open and honest communication, keeping you informed throughout the development process."
        />
        <WhyCard
          img={td}
          title="Timely Delivery"
          subtitle="We value your time and strive to deliver projects on schedule, without compromising on quality."
        />
        <WhyCard
          img={os}
          title="Ongoing Support"
          subtitle="Our relationship doesn't end with the launch of your website. We provide comprehensive support."
        />
      </div>
    </div>
  );
};
