import React from "react";
import "./basket.css";
import { Link } from "react-router-dom";

const Basket = (props) => {
  return (
    <div className="main">
      <h1 className="basketHeader">Your basket</h1>
      <div>
        {props.basket
          .map((item) => {
            return (
              <div className="basketItem" key={item.src}>
                <Link to={`/shop/${item.id}`}>
                <img className="basketImg" src={item.src} alt={item.name} />
                </Link>
                <div className="basketDetails">
                  <p>{item.name}</p>
                  <p>
                    £{item.price} / {item.size}L
                  </p>
                </div>
                <div className="amountHolder">
                  <div className="amountControl">-</div>
                  <div className="amountControl number">{item.order}</div>
                  <div className="amountControl">+</div>
                </div>
                <div>
                  <p className="itemCost">£{item.price * item.order}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Basket;