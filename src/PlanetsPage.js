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
      <Link to={`/planets/${planets.name}`}>
        <div className="earth">Earth</div>{" "}
      </Link>
      <Link to={`/planets/${planets.name}`}>
        <div className="mars">Mars</div>
      </Link>
      <Link to={`/planets/${planets.name}`}>
        <div className="jupiter">Jupiter</div>
      </Link>
      <Link to={`/planets/${planets.name}`}>
        <div className="saturn">Saturn</div>
      </Link>
      <Link to={`/planets/${planets.name}`}>
        <div className="uranus">Uranus</div>
      </Link>
      <Link to={`/planets/${planets.name}`}>
        <div className="neptune">Neptune</div>
      </Link>
    </div>
  );
}

export default PlanetsPage;
