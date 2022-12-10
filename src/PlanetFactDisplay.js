import { Link } from "react-router-dom";

function PlanetFactDisplay({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image"></div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h2>{planet.name}</h2>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet :{planet.colour} </p>
            <p>How many moons does this planet have:{planet.moons} </p>
            <p>
              How many days does this planet take to orbit The Sun:
              {planet.orbit}
            </p>
            <p>
              What is the avergae surface temperature of this planet:
              {planet.temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{planet.distance}
            </p>
          </div>
        </div>
      </div>
      <button className="go-back-button">
        <Link to="/planets">GO BACK</Link>
      </button>
    </>
  );
}
export default PlanetFactDisplay;
