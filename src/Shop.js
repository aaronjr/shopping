import React from "react";

const Shop = (props) => {
  return (
    <div className="shop">
      <h1>Hello from Shop</h1>
      <div className="colourHolder">
        {props.colours.map((colour) => {
          return (
            <div key={colour.src} className="square">
              <img className="colours" src={colour.src} alt={colour.name} />
              <p>{colour.name}</p>
              <p>£{colour.price}</p>
              <p>{colour.size} Litres</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
