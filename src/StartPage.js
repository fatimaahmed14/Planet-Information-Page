import "./Styles.css";
import { Routes, Route, Link } from "react-router-dom";
import PlanetsPage from "./PlanetsPage";

function StartPage() {
  return (
    <>
      <div className="start-page">
        <div className="welcome">Welcome To The Milkyway</div>
        <button className="start-button">
          <Link to="/planets">START</Link>
        </button>
      </div>
      <Routes>
        <Route path="/planets" element={<PlanetsPage />} />
      </Routes>
    </>
  );
}

export default StartPage;
