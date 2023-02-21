import React, { useEffect, useState } from "react";
import "./item.css"
import arrow from "./arrow.svg"
import flowers from "./flowers.svg";
import fairy from "./fairy.svg";
import durable from "./durable.svg";
import { Link, useMatch } from "react-router-dom";

const Item = (props) => {
  const [item, setItem] = useState([]);

  const id = useMatch("/shop/:id").params.id;

  useEffect(() => {
    const item = props.colours.filter(colour => {
      return colour.id === parseInt(id);
    })
    setItem(item[0])
  }, [])

  return (
    <div className="main">
      <div className="item">
        <div className="itemImageHolder">
          <img className="itemImage" src={item.src} alt={item.name} />
        </div>
        <div className="itemDetails">
          <h1 className="itemTitle"> {item.name} </h1>
          <p className="itemCost">
            £{item.price} / {item.size}L
          </p>
          <p className="description">{item.description}</p>
          <button onClick={() => {
            props.onClick(item.id)
          }} className="addBasket">Add to basket</button>
          <div className="usual">
            <img className="smallIcon" src={arrow} alt="small icon arrows" />
            <p className="smallIconDesc">Great coverage and easy to apply</p>
            <img className="smallIcon" src={flowers} alt="small icon flowers" />
            <p className="smallIconDesc">
              No harmful chemicals and eco-friendly
            </p>
            <img
              className="smallIcon"
              src={fairy}
              alt="small icon wand in hand"
            />
            <p className="smallIconDesc">Flawless finish with fewer coats</p>
            <img
              className="smallIcon"
              src={durable}
              alt="small icon wiping with cloth"
            />
            <p className="smallIconDesc">Durable, multi-surface and wipeable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
