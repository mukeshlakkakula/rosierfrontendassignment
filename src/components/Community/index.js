import React from "react";
import "./index.css";
import cardsData from "./community.json";
const Community = () => {
  const CommnityCards = cardsData.map((each, index) => (
    <div key={index} className="cards_inner_container">
      <div className="imageContainer">
        <img className="card_images" src={each.img} alt={each.text} />
      </div>

      <div className="">
        <p className="card_text_one">{each.text}</p>
      </div>
    </div>
  ));
  return (
    <div className="Community_main_container">
      <h2 className="text-center">Community</h2>
      <div className="Community_card_container">{CommnityCards}</div>
    </div>
  );
};

export default Community;
