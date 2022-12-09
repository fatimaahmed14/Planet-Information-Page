import PlanetListItem from "./PlanetListItem";

function PlanetList(props) {
  const { people } = props;

  return (
    <ul>
      {people.map((planets, index) => (
        <PlanetListItem key={index} planets={planets} />
      ))}
    </ul>
  );
}

export default PlanetList;
