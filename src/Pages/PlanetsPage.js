// import React from "react";
import { Link } from "react-router-dom";

function PlanetsPage({ planets, setSelectedPlanet }) {
  const selectPlanet = (planet) => {
    setSelectedPlanet(planet);
  };
  return (
    <div>
      <ul>
        {planets.map((planet) => (
          <li
            onClick={() => {
              selectPlanet(planet);
            }}
            key={planet.id}
          >
            <div className={planet.name}></div>
            <Link to={`/${planet.name}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetsPage;
