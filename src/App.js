import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./StartPage";
import PlanetsPage from "./PlanetsPage";
// import PlanetFactDisplay from "./PlanetFactDisplay";
import MercuryDisplayPage from "./IndividualPlanets/mercury";
import VenusDisplayPage from "./IndividualPlanets/venus";
import EarthDisplayPage from "./IndividualPlanets/earth";

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/planets")
      .then((res) => res.json())
      .then((planetData) => setPlanets(planetData));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/planets" element={<PlanetsPage planets={planets} />} />
        {/* <Route
          path="/planets/:name"
          element={<PlanetFactDisplay planet={planets} />}
        /> */}
        <Route
          path="/planets/mercury"
          element={<MercuryDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/venus"
          element={<VenusDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/earth"
          element={<EarthDisplayPage planet={planets} />}
        />
      </Routes>
    </>
  );
}

export default App;

// TO-DO:
// work out proportions of img + how to make  them fit
// find pictures for remaining planets
// create all other planet fact pages
// refine design + font sizes for fact page
// add media queries to css for planet page + fact pages
