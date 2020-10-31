import React from "react";

import "./CarousalItem.css";

const CarousalItem = props => {
  return (
    <div className="Card">
      <img src={props.imgSrc} alt="Poster" className="CarousalImg" />
    </div>
  );
};

export default CarousalItem;
