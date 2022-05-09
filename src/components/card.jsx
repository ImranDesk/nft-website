import React from "react";
import weth from "../assets/weth.png";

const Card = ({ id, name, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt="image" />
      <div className="details">
        <div className="name">
          <p>{name}</p>
          <div className="id">
            <p>#{id}</p>
          </div>
        </div>

        <div className="price-container">
          <img src={weth} className="wethImage" alt="" />
          <div className="price">
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
