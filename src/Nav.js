import { Link } from "react-router-dom";
import * as React from "react";
import { Logo } from "./logo"
import "./nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <Logo />
      <ul className="nav-list">
        <li className="list-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="list-item">
          <Link to={"/Shop"}>Shop</Link>
        </li>
        <li className="list-item">
          <Link to={"/Basket"}>Basket</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
