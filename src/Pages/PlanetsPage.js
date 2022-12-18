import { Link } from "react-router-dom";

function PlanetsPage({ planets }) {
  console.log(planets);
  return (
    <div className="planets">
      <Link to="/planets/mercury">
        <div className="mercury">Mercury</div>
      </Link>
      <Link to="/planets/venus">
        <div className="venus">Venus</div>
      </Link>
      <Link to="/planets/earth">
        <div className="earth">Earth</div>
      </Link>
      <Link to="/planets/mars">
        <div className="mars">Mars</div>
      </Link>
      <Link to="/planets/jupiter">
        <div className="jupiter">Jupiter</div>
      </Link>
      <Link to="/planets/saturn">
        <div className="saturn">Saturn</div>
      </Link>
      <Link to="/planets/uranus">
        <div className="uranus">Uranus</div>
      </Link>
      <Link to="/planets/neptune">
        <div className="neptune">Neptune</div>
      </Link>
    </div>
  );
}

export default PlanetsPage;
