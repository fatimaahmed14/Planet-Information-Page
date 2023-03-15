import "../Style/Styles.css";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <>
      <div>hey</div>
      <button className="go-back-button">
        <Link to="/planets">GO BACK</Link>
      </button>
    </>
  );
}

export default Quiz;
