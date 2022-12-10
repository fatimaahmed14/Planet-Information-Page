import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./StartPage";
import PlanetsPage from "./PlanetsPage";
import PlanetFactDisplay from "./PlanetFactDisplay";

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
          path="/planets/:name"
          element={<PlanetFactDisplay planet={planets} />}
        />
      </Routes>
    </>
  );
}

export default App;
