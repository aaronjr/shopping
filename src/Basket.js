import React from "react";
import "./basket.css";

const Basket = (props) => {
  return (
    <div className="main">
      <h1 className="basketHeader">Your basket</h1>
      <div>
        {props.basket
          .sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price) ? 1 : -1;
          })
          .map((item) => {
            return (
              <div className="basketItem" key={item.src}>
                <img className="basketImg" src={item.src} alt={item.name} />
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
                  <p className="itemCost">£{item.price}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Basket;
