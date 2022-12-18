import "../Style/Styles.css";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <>
      <div className="start-page">
        <div className="welcome">WELCOME TO THE MILKYWAY !</div>
        <button className="start-button">
          <Link to="/planets">START</Link>
        </button>
      </div>
    </>
  );
}

export default StartPage;
