import PlanetFactDisplay from "./PlanetFactDisplay";

function PlanetList({ planets }) {
  return (
    <>
      {planets.map((planets, index) => (
        <PlanetFactDisplay key={index} planets={planets} />
      ))}
    </>
  );
}

export default PlanetList;
