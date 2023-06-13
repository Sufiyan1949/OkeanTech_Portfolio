import React from "react";

export const WhyCard = ({img, title, subtitle}) => {
  return (
    <div className="card" style={{maxWidth: '320px'}}>
      <img src={img} alt="card image" style={{height: '80px'}}/>
      <h3 className="heading3" style={{marginBottom: '16px',  marginTop: '8px'}}>{title}</h3>
      <p className="small-txt">{subtitle}
      </p>
    </div>
  );
};
