import React from "react";
import "./card.css";

const Card = (props) => {
  const { name, img, genre } = props;

  return (
    <div className="card">
      <img src={img} alt="anime pic" />

      <div className="card__data">
        <h2 className="card__title">{name}</h2>
        <h3 className="card__genre">{genre}</h3>
      </div>
    </div>
  );
};

export default Card;
