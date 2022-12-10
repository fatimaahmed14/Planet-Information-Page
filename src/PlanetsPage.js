import { Link } from "react-router-dom";

function PlanetsPage({ planets }) {
  return (
    <div className="planets">
      <Link to={`/planets/${planets.name}`}>
        <div className="mercury">Mercury</div>
      </Link>
      <Link to={`/planets/${planets.name}`}>
        <div className="venus">Venus</div>
      </Link>
      <div className="earth">Earth</div>
      <div className="mars">Mars</div>
      <div className="jupiter">Jupiter</div>
      <div className="saturn">Saturn</div>
      <div className="uranus">Uranus</div>
      <div className="neptune">Neptune</div>
    </div>
  );
}

export default PlanetsPage;

// place links on each planet individually
// Do I want to hard code each page ?
// I will be using names instead of ids
// need to re-cap how to link using ids
// I think they require location and state but cant be too sure
