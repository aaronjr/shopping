import React, { useState } from "react";
import "../css/basket.css";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import emptyBasket from "../images/emptyBasket.svg";
import { Confirmation } from "./confirmation.js";

const Basket = (props) => {

  // State to control when to show payment accepeted form
  const [ paid, setPaid ] = useState(false);

  // on click PAY
  // - update state
  // - then load remove
  const popFunction = () => {
    setPaid(true)
    removePop()
  }

  // set time out to show message then empty basket
  // which resets basket and counter
  const removePop = () => {
    setTimeout(() => {
      setPaid(false)
      props.emptyBasket();
    }, 5000)
  };

  return props.basketTotal !== 0 ? (
    paid === true ? (
      <Confirmation />
    ) : (
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
              <button onClick={() => popFunction()} className="pay">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  ) : (
    <div className="main emptyMain">
      <div className="emptyBasketHolder">
        <img
          className="emptyBasketImage"
          src={emptyBasket}
          alt="empty basket"
        />
        <h3 className="emptyBasketH3">Your basket is empty.</h3>
        <p className="emptyBasketP">
          Hmm… it looks like you haven’t added anything to your basket yet.
        </p>
        <Link className="emptyButtonLink" to={"/shop"}>
          <p className="emptyButton">Shop paint</p>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
