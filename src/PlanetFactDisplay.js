import { Link } from "react-router-dom";

function PlanetFactDisplay({ planets }) {
  return (
    <>
      <div className="planet-image"></div>
      <div className="planet-name">
        <h2>Planet Name</h2>
      </div>
      <div className="planet-facts">
        <p>What colour is this palnet : </p>
        <p>How many moons does this palnet have: </p>
        <p>How many days does this planet take to orbit The Sun: </p>
        <p>What is the avergae surface temperature of this planet: </p>
        <p>What is the position of thid planet from the sun: </p>
      </div>
      <button>
        <Link to="/">GO BACK</Link>
      </button>
    </>
  );
}
export default PlanetFactDisplay;
