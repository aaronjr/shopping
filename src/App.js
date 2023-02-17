import "./App.css";
import "./shop.css";
import { Link } from "react-router-dom";
import interior from "./interior.avif";
import eco from "./eco.svg";
import fairy from "./fairy.svg";
import heart from "./heart.svg";

const App = () => {
  return (
    <div className="main">
      <div className="heroMain">
        <div className="textHolderMain">
          <h1 className="headerMain">Moss green</h1>
          <p>
            A clean, organic green. Not quite a pastel, this welcoming shade is
            fresh and grounding. Stunning on panelling. Combine with Natural
            Off-White, Pampas. In a smooth Eggshell finish designed for wood and
            metal.
          </p>
          <div className="buttonHolder">
            <Link to={"/Shop"}>
              <div className="button">Shop all paint</div>
            </Link>

            <Link to={"/shop/6"}>
              <div className="button">Buy Moss green</div>
            </Link>
          </div>
        </div>
        <img className="interior" src={interior} alt="Modern front room" />
      </div>

      <div className="mainIconHolder">
        <div className="iconEach">
          <img className="iconsMain" src={fairy} alt="eco icon" />
          <h5>Painless decorating</h5>
          <p>
            Get stuck in to your next project with pigment-rich paints,
            easy-to-hang wallpaper and all the decorating tools you need
          </p>
        </div>
        <div className="iconEach">
          <img className="iconsMain" src={heart} alt="eco icon" />
          <h5>Your perfect colour</h5>
          <p>
            Our peel-and-stick samples and 1-on-1 virtual colour consultant
            sessions make it easy to find a colour you love.
          </p>
        </div>
        <div className="iconEach">
          <img className="iconsMain" src={eco} alt="eco icon" />
          <h5>Eco-friendly</h5>
          <p>
            Decorate sustainably with our low VOC paints and eco-friendly
            wallpapers and tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
