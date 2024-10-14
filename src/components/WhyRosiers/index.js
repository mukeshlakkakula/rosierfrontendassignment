import React from "react";
import "./index.css";
import Data from "./why.json";

const WhyRosier = () => {
  const Element = Data.map((each, index) => (
    <div key={index} className="why_map_inner_container">
      <img src={each.icon} alt={index} className="icons_style" />
      <p className="element_para p-2">{each.name}</p>
    </div>
  ));
  return (
    <div className="why_rosier_main_container">
      <h2 className="text-center text-light">Why Rosier?</h2>
      <div className="Why_rosier_map_container">{Element}</div>
    </div>
  );
};

export default WhyRosier;
