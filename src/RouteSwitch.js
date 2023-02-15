import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Basket from "./Basket";
import Nav from "./Nav";

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
  );
};

export default RouteSwitch;
