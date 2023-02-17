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

    const item = colours.filter(colour => {
      return colour.id === id
    })

    const improvedItem = item[0]
    improvedItem.order = 1;
    // item with an order number of 1
    
    const duplicate = basket.filter((item) => {
      return item.id === improvedItem.id;
    });
    
    const noDuplicate = basket.filter((item) => {
      return item.id !== improvedItem.id;
    });

    if (duplicate[0] !== undefined) {
      console.log("match");
      let improvedDup = duplicate[0];
      improvedDup.order++
      setBasket([...noDuplicate, improvedDup]);
    } else {
      console.log("no match");
      setBasket([...basket, improvedItem]);
    }
  }

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
        <Route path="/basket" element={<Basket basket={ basket} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
