import React from "react";
import "./basket.css";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";

const Basket = (props) => {
  return (
    props.basketTotal !== 0 ? (
    <div className="main">
      <h1 className="basketHeader">Your basket</h1>
      <div className="basketFull">
        <div>
          {props.basket.map((item) => {
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
                  {item.amount !== 1 ? (
                    <button
                      onClick={() => props.reduceAmount(item.id)}
                      className="amountControl"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => props.removeItem(item.id)}
                      className="amountControl"
                    >
                      <Icon path={mdiDelete} size={0.8} />
                    </button>
                  )}
                  <div className="amountControl number">{item.amount}</div>
                  <button
                    onClick={() => props.increaseAmount(item.id)}
                    className="amountControl"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="itemCost">£{item.price * item.amount}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="purchase">
          <p className="basketTotal">Sub total</p>
          <p className="basketTotal price">£{props.basketTotal.toFixed(2)}</p>
          <p className="basketTotal">Delivery</p>
          <p className="basketTotal price">£6.99</p>
          <p className="basketTotal total">Total</p>
          <p className="basketTotal total price">
            £{(props.basketTotal + 6.99).toFixed(2)}
          </p>
          <div className="payHolder">
            <button className="pay">Pay</button>
          </div>
        </div>
      </div>
    </div>
    ) :
      <div className="main">
        
     </div>
  );
};

export default Basket;
