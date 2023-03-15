import { Link } from "react-router-dom";

function UranusDisplayPage({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg"
            alt="uranus"
          ></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>{planet[6].name}</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : {planet[6].colour} </p>
            <p>How many moons does this planet have: {planet[6].moons} moons</p>
            <p>
              How many days does this planet take to orbit The Sun:{"  "}
              {planet[6].orbit}
            </p>
            <p>
              What is the average surface temperature of this planet:{"  "}
              {planet[6].temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{"  "}
              {planet[6].position}
            </p>
            <p>
              How many miles away is the planet from the sun:{"  "}
              {planet[6].distance}
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
export default UranusDisplayPage;
