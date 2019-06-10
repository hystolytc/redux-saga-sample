import React from "react";
import "./card.scss";

const Card = ({ img, name, price, onAddItem }) => {
  return (
    <div className="card-container">
      <figure className="fig">
        <img src={img} alt="name"/>
      </figure>

      <div className="detail-container">
        <div className="detail__title">
          <h1>{name}</h1>
          <p><i className="fa fa-usd" /> {price}</p>
        </div>

        <div className="detail__btn">
          <button
            onClick={onAddItem}
          >
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
