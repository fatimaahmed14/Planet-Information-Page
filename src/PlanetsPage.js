function PlanetsPage() {
  return (
    <div className="planets">
      <div className="mercury">mercury</div>
      <div className="venus">venus</div>
      <div className="earth">earth</div>
      <div className="mars">mars</div>
      <div className="jupiter">jupiter</div>
      <div className="saturn">saturn</div>
      <div className="uranus">uranus</div>
      <div className="neptune">neptune</div>
    </div>
  );
}

export default PlanetsPage;

// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// import HireForm from "./components/HireForm";

// function PersonProfile({ hiredPeople, setHiredPeople }) {
//   const [person, setPerson] = useState(null);

//   const location = useLocation();
//   useEffect(() => {
//     if (!location.state) return;
//     const personToHireData = location.state.person;
//     setPerson(personToHireData);
//   }, [location]);

//   if (!person) return <p>Loading...</p>;

//   return (
//     <article>
//       <h2>
//         {person.name.first} {person.name.last}
//       </h2>
//       <HireForm
//         person={person}
//         hiredPeople={hiredPeople}
//         setHiredPeople={setHiredPeople}
//       />
//     </article>
//   );
// }
// ^ taken as an example from hire route
