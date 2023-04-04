import { Link } from "react-router-dom";

function MarsDisplayPage() {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img
            src="https://spaceplace.nasa.gov/review/all-about-mars/mars1.en.jpg"
            alt="mars"
          ></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>Earth</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : </p>
            <p>How many moons does this planet have: </p>
            <p>How many days does this planet take to orbit The Sun:</p>
            <p>What is the average surface temperature of this planet:</p>
            <p>What is the position of this planet from the sun:</p>
            <p>How many miles away is the planet from the sun:</p>
          </div>
        </div>
      </div>
      <button className="go-back-button">
        <Link to="/planets">GO BACK</Link>
      </button>
      <button className="quiz-button">
        <Link to="/Quiz">TAKE A QUIZ</Link>
      </button>
    </>
  );
}
export default MarsDisplayPage;
