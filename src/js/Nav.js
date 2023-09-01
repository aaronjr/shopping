import { Link } from "react-router-dom";
import * as React from "react";
import { Logo } from "./logo"
import "../css/nav.css";
import Icon from "@mdi/react";
import { mdiBasketOutline } from "@mdi/js";


const Nav = (props) => {
  return (
    <div className="navbar">
      <Logo />
      <ul className="nav-list">
        <li className="list-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="list-item">
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li className="list-item basketIcon">
          <Link to={"/Basket"}>
            <Icon path={mdiBasketOutline} size={1.5} />
            {props.itemCount !== 0 && (
              <p className="amount">{props.itemCount}</p>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
