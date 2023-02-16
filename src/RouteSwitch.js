import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Basket from "./Basket";
import Nav from "./Nav";
import { Footer } from "./Footer";
import { allColours } from "./Colours";

const RouteSwitch = () => {
  const [colours, setColours] = useState(allColours);
  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav basket={basket} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop colours={colours} />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
