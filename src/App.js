import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import PlanetsPage from "./Pages/PlanetsPage";
import Quiz from "./Pages/Quiz";
// import PlanetFactDisplay from "./Pages/PlanetFactDisplay";
import MercuryDisplayPage from "./IndividualPlanets/mercury.js";
import VenusDisplayPage from "./IndividualPlanets/venus";
import EarthDisplayPage from "./IndividualPlanets/earth";
import MarsDisplayPage from "./IndividualPlanets/mars";
import JupiterDisplayPage from "./IndividualPlanets/jupiter";
import SaturnDisplayPage from "./IndividualPlanets/saturn";
import UranusDisplayPage from "./IndividualPlanets/uranus";
import NeptuneDisplayPage from "./IndividualPlanets/neptune";

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
        <Route
          path="/mercury"
          element={<MercuryDisplayPage planet={planets} />}
        />
        <Route path="/venus" element={<VenusDisplayPage planet={planets} />} />
        <Route path="/earth" element={<EarthDisplayPage planet={planets} />} />
        <Route path="/mars" element={<MarsDisplayPage planet={planets} />} />
        <Route
          path="/jupiter"
          element={<JupiterDisplayPage planet={planets} />}
        />
        <Route
          path="/saturn"
          element={<SaturnDisplayPage planet={planets} />}
        />
        <Route
          path="/uranus"
          element={<UranusDisplayPage planet={planets} />}
        />
        <Route
          path="/neptune"
          element={<NeptuneDisplayPage planet={planets} />}
        />
        <Route path="/QUIZ" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;

// json-server --watch db.json --port 4000
// test line of code