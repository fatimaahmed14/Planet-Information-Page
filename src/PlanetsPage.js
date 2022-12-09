// import { Link } from "react-router-dom";

function PlanetsPage({ planets }) {
  console.log(planets);
  return (
    <div className="planets">
      <div className="mercury">Mercury</div>
      <div className="venus">Venus</div>
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
