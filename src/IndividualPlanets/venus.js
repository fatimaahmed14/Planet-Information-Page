import { Link } from "react-router-dom";

function VenusDisplayPage({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img
            src="https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P-1200-80.jpg.webp"
            alt="venus"
          ></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>{planet[1].name}</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : {planet[1].colour} </p>
            <p>How many moons does this planet have: {planet[1].moons} moons</p>
            <p>
              How many days does this planet take to orbit The Sun:{"  "}
              {planet[1].orbit}
            </p>
            <p>
              What is the average surface temperature of this planet:{"  "}
              {planet[1].temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{"  "}
              {planet[1].distance}
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
export default VenusDisplayPage;
