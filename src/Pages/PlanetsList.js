import PlanetFactDisplay from "./PlanetFactDisplay";

function PlanetList({ planets }) {
  return (
    <>
      {planets.map((planet, index) => (
        <PlanetFactDisplay key={index} planet={planet} />
      ))}
    </>
  );
}

export default PlanetList;
