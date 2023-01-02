import { Link } from "react-router-dom";

function PlanetsPage({ planets }) {
  return (
    <div className="planets">
      <Link to="/planets/mercury">
        <div className="name-div">Mercury</div>
        <div className="mercury"></div>
      </Link>
      <Link to="/planets/venus">
        <div className="name-div">Venus</div>
        <div className="venus"></div>
      </Link>
      <Link to="/planets/earth">
        <div className="name-div">Earth</div>
        <div className="earth"></div>
      </Link>
      <Link to="/planets/mars">
        <div className="name-div">Venus</div>
        <div className="mars"></div>
      </Link>
      <Link to="/planets/jupiter">
        <div className="name-div">Jupiter</div>
        <div className="jupiter"></div>
      </Link>
      <Link to="/planets/saturn">
        <div className="name-div">Saturn</div>
        <div className="saturn"></div>
      </Link>
      <Link to="/planets/uranus">
        <div className="name-div">Uranus</div>
        <div className="uranus"></div>
      </Link>
      <Link to="/planets/neptune">
        <div className="name-div">Neptune</div>
        <div className="neptune"></div>
      </Link>
    </div>
  );
}

export default PlanetsPage;
