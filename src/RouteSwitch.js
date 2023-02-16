import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Basket from "./Basket";
import Nav from "./Nav";
import { allColours } from "./Colours";

const RouteSwitch = () => {
  const [colours, setColours] = useState(allColours);

  return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop colours={colours} />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
  );
};

export default RouteSwitch;
