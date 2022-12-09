import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./StartPage";
import PlanetsPage from "./PlanetsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/planets" element={<PlanetsPage />} />
      </Routes>
    </>
  );
}

export default App;
