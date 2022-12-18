import { Link } from "react-router-dom";

function SaturnDisplayPage({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img src="" alt="saturn"></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>{planet[5].name}</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : {planet[5].colour} </p>
            <p>How many moons does this planet have: {planet[5].moons} moons</p>
            <p>
              How many days does this planet take to orbit The Sun:{"  "}
              {planet[5].orbit}
            </p>
            <p>
              What is the average surface temperature of this planet:{"  "}
              {planet[5].temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{"  "}
              {planet[5].position}
            </p>
            <p>
              How many miles away is the planet from the sun:{"  "}
              {planet[5].distance}
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
export default SaturnDisplayPage;
