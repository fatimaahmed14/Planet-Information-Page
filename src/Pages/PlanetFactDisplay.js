// import { Link } from "react-router-dom";

// function PlanetFactDisplay({ planet }) {
//   return (
//     <>
//       <div className="fact-page-grid">
//         <div className="planet-image">
//           <img
//             src=""
//             alt={planet.name}
//           ></img>
//         </div>
//         <div className="right-side-of-page">
//           <div className="planet-name">
//             <h1>{planet.name}</h1>
//           </div>
//           <div className="planet-facts">
//             <p>What colour is this planet : {planet.colour} </p>
//             <p>How many moons does this planet have: {planet.moons} moons</p>
//             <p>
//               How many days does this planet take to orbit The Sun:{"  "}
//               {planet.orbit}
//             </p>
//             <p>
//               What is the average surface temperature of this planet:{"  "}
//               {planet.temperature}
//             </p>
//             <p>
//               What is the position of this planet from the sun:{"  "}
//               {planet.position}
//             </p>
//             <p>
//               How many miles away is the planet from the sun:{"  "}
//               {planet.distance}
//             </p>
//           </div>
//         </div>
//       </div>
//       <button className="go-back-button">
//         <Link to="/planets">GO BACK</Link>
//       </button>
//     </>
//   );
// }
// export default PlanetFactDisplay
import React from "react";
import { Link } from "react-router-dom";

function PlanetFactDisplay({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img src={planet.image} alt={planet.name}></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>{planet.name}</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : {planet.colour} </p>
            <p>How many moons does this planet have: {planet.moons} moons</p>
            <p>
              How many days does this planet take to orbit The Sun:{"  "}
              {planet.orbit}
            </p>
            <p>
              What is the average surface temperature of this planet:{"  "}
              {planet.temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{"  "}
              {planet.position}
            </p>
            <p>
              How many miles away is the planet from the sun:{"  "}
              {planet.distance}
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
