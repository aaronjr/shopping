import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Basket from "./Basket";
import Item from "./Item.js"
// import {FakeBasket} from "./fakeBasket";
import Nav from "./Nav";
import { Footer } from "./Footer";
import { allColours } from "./Colours";

const RouteSwitch = () => {
  const [colours] = useState(allColours);
  const [basket, setBasket] = useState([]);

  const addToBasket = (id) => {
    const item = colours.filter((colour) => {
      return colour.id === id;
    });

    const newItem = item[0];

    // check for a matching item
    if (basket.some((item) => item.id === newItem.id)) {
      // update basket
      setBasket((basket) =>
        basket.map((basketItem) =>
          // find the correct item
          basketItem.id === newItem.id
            ? {
              // spread the item and change amount
                ...basketItem,
                amount: basketItem.amount + 1,
              }
            : basketItem
          // if no match - leave as is
        )
      );
      return;
    } else {
      // Add to cart if no match
      setBasket((basket) => [
      // spread basket and add to it
        ...basket,
        { ...newItem, amount: 1 }, // <-- initial amount 1
      ]);
    }
  }

  const reduceAmount = (id) => {
    const itemz = colours.filter((colour) => {
      return colour.id === id;
    });

    const newItem = itemz[0];

    if (basket.some((item) => item.id === newItem.id)) {
        setBasket((basket) =>
          basket.map(
            (basketItem) =>
              // find the correct item
              basketItem.id === newItem.id && basketItem.amount > 1
                ? {
                    // spread the item and change amount
                    ...basketItem,
                    amount: basketItem.amount - 1,
                  }
                : 
                basketItem
          )
        );
        return;
    }
  }

  const removeItem = (id) => { 
    setBasket((basket) =>
      basket.filter((basketItem) =>
        // find the correct item
        basketItem.id !== id
      )
    );
    return;
  }

  const increaseAmount = (id) => {
    const item = colours.filter((colour) => {
      return colour.id === id;
    });

    const newItem = item[0];

    if (basket.some((item) => item.id === newItem.id)) {
      setBasket((basket) =>
        basket.map(
          (basketItem) =>
            // find the correct item
            basketItem.id === newItem.id
              ? {
                  // spread the item and change amount
                  ...basketItem,
                  amount: basketItem.amount + 1,
                }
              : basketItem
          // if no match - leave as is
        )
      );
      return;
    }
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav basket={basket} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop colours={colours} />} />
        <Route
          path="/shop/:id"
          element={<Item onClick={addToBasket} colours={colours} />}
        />
        <Route
          path="/basket"
          element={
            <Basket
              basket={basket}
              removeItem={removeItem}
              reduceAmount={reduceAmount}
              increaseAmount={increaseAmount}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
