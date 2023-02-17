import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Basket from "./Basket";
import Item from "./Item.js"
import {FakeBasket} from "./fakeBasket";
import Nav from "./Nav";
import { Footer } from "./Footer";
import { allColours } from "./Colours";

const RouteSwitch = () => {
  const [colours, setColours] = useState(allColours);
  const [basket, setBasket] = useState(allColours);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav basket={basket} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop colours={colours} />} />
        <Route path="/shop/:id" element={<Item colours={colours} />} />
        <Route path="/basket" element={<Basket basket={FakeBasket} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
