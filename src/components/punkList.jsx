import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import weth from "../assets/weth.png";

const PunkList = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x0CFa01d41BF48DF31b81E2Be061E3413174fcEb0"
      )
      .then((data) => {
        console.log(data.data.assets);
        setCard(data.data.assets);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="punklist">
      {card.map((curElem) => {
        return (
          <div className="card">
            <img src={curElem.image_original_url} alt="image" />
            <div className="details">
              <p>{curElem.name}</p>

              <p>#{curElem.id}</p>

              <div className="price-container">
                <img src={weth} className="wethImage" alt="" />
                <p>{curElem.traits.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;
