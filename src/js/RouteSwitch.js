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
  // set state
  const [colours, setColours] = useState([]);
  const [basket, setBasket] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [basketTotal, setBasketTotal] = useState(0);

  // on first load sort low to high
  useEffect(() => {
    const sortedColours = [...allColours].sort((a, b) => {
      return a.price - b.price;
    });

    setColours(sortedColours);
  }, []);

  // on basket update, set item and total count
  useEffect(() => {
    setItemCount(
      basket.reduce((a, b) => {
        return a + b.amount;
      }, 0)
    );

    setBasketTotal(
      basket.reduce((a, b) => {
        return a + b.price * b.amount;
      }, 0)
    );
  }, [basket]);

  // set window height to top on load of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // empty basket on payment
  const emptyBasket = () => {
    // set basket to empty
    setBasket([]);
    // reset colours to low to high
    setColours(([...colurs]) =>
      colurs.sort((a, b) => {
        return a.price - b.price;
      })
    );
  };

  // add item to basket 
  const addToBasket = (id) => {
    // get array of the item from colours
    const item = colours.filter((colour) => {
      return colour.id === id;
    });

    // get the object
    const newItem = item[0];

    // check for a matching item
    if (basket.some((item) => item.id === newItem.id)) {
      // update basket
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
    } else {
      // Add to cart if no match
      setBasket((basket) => [
        // spread basket and add to it
        ...basket,
        { ...newItem, amount: 1 }, // <-- initial amount 1
      ]);
    }
  };

  // remove one of item from basket
  const reduceAmount = (id) => {
    // array of items that match
    const item = colours.filter((colour) => {
      return colour.id === id;
    });

    // get object
    const newItem = item[0];

    // if item matches selected
    if (basket.some((item) => item.id === newItem.id)) {
      setBasket((basket) =>
        basket.map((basketItem) =>
          // find the correct item
          basketItem.id === newItem.id && basketItem.amount > 1
            ? {
                // spread the item and change amount
                ...basketItem,
                amount: basketItem.amount - 1,
              }
            : basketItem
        )
      );
      return;
    }
  };

  // remove the lastitem from basket 
  const removeItem = (id) => {
    setBasket((basket) =>
      basket.filter(
        (basketItem) =>
          // find all that don't match
          basketItem.id !== id
      )
    );
    return;
  };

  // on select of changing sort by
  const selectChange = (sort) => {
    // update state
    // using sort as needed
    setColours(([...colurs]) =>
      sort === "Descending"
        ? colurs.sort((a, b) => {
          return a.price - b.price;
        })
        : colurs.sort((a, b) => {
          return b.price - a.price;
        })
    );
  }; 

  // increment item in basket
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
      <Nav itemCount={itemCount} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={<Shop colours={colours} selectChange={selectChange} />}
        />
        <Route
          path="/shop/:id"
          element={<Item onClick={addToBasket} colours={colours} />}
        />
        <Route
          path="/basket"
          element={
            <Basket
              emptyBasket={emptyBasket}
              basket={basket}
              basketTotal={basketTotal}
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
