import React from "react";
import paint from "../images/paint.avif";
import { Link } from "react-router-dom";

const Shop = (props) => {
  return (
    <div className="main">
      <div className="hero">
        <div className="textHolder">
          <h1 className="header">Trending colours</h1>
          <p>
            Make your walls smile with durable designer paint in a range of
            pigment-rich shades, with matt, eggshell or exterior finishes. Low
            VOC, eco-friendly, water-based and wipeable, it's good for you and
            the planet — with wall-to-wall coverage for an ear-to-ear grin.
          </p>
        </div>

        <div className="imgHolder">
          <img className="paint" src={paint} alt="Blob of paint" />
        </div>
      </div>
      <div className="filter">
        <p>Sort by</p>
        <select onChange={(event) => props.selectChange(event.target.value)}>
          <option value="Descending">Price low to high</option>
          <option value="Ascending">Price high to low</option>
        </select>
      </div>
      <div className="colourHolder">
        {props.colours.map((colour) => {
          return (
            <Link to={`/shop/${colour.id}`} key={colour.id}>
              <div className="square">
                <img className="colours" src={colour.src} alt={colour.name} />
                <p className="colourItem">{colour.name}</p>
                <p className="colourItem">
                  £{colour.price} &#183; {colour.size}L
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
