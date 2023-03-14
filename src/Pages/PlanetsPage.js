import { Link } from "react-router-dom";

function PlanetsPage({ planets, setSelectedPlanet }) {
  const selectPlanet = (planet) => {
    setSelectedPlanet(planet);
  };
  return (
    <div>
      <ul className="planets">
        {planets.map((planet) => (
          <li
            onClick={() => {
              selectPlanet(planet);
            }}
            key={planet.id}
          >
            <div className={planet.name}></div>
            <Link className="name-div" to={`/${planet.name}`}>
              {planet.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetsPage;
