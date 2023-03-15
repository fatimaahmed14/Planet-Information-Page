import { Link } from "react-router-dom";

function PlanetsPage({ planets }) {
  return (
    <div>
      <ul className="planets">
        {planets.map((planet) => (
          <li key={planet.id}>
            <div className={planet.name}></div>
            <div>
              <Link className="name-div" to={`/${planet.name}`}>
                {planet.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetsPage;
