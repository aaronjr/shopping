import { Link } from "react-router-dom";
import * as React from "react";

const Nav = () => {
  return (
    <div>
      <ul>
        <li className="list">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="list">
          <Link to={"/Shop"}>Shop</Link>
        </li>
        <li className="list">
          <Link to={"/Basket"}>Basket</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
