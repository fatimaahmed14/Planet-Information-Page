import { Link } from "react-router-dom";

function NeptuneDisplayPage({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img src="" alt="neptune"></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>{planet[7].name}</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : {planet[7].colour} </p>
            <p>How many moons does this planet have: {planet[7].moons} moons</p>
            <p>
              How many days does this planet take to orbit The Sun:{"  "}
              {planet[7].orbit}
            </p>
            <p>
              What is the average surface temperature of this planet:{"  "}
              {planet[7].temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{"  "}
              {planet[7].position}
            </p>
            <p>
              How many miles away is the planet from the sun:{"  "}
              {planet[7].distance}
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
export default NeptuneDisplayPage;
