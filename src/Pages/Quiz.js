import "../Style/Styles.css";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div className="quiz-grid">
      <div className="quiz-title">Planet Quiz</div>
      <div className="quiz-container">
        <form>
          <div>
            <h2>Which planet is closest to the sun ?</h2>
            <label>
              <input type="radio" name="question1" value="option1" />
              Earth
            </label>
            <label>
              <input type="radio" name="question1" value="option2" />
              Mars
            </label>
            <label>
              <input type="radio" name="question1" value="option3" />
              Mercury
            </label>
          </div>

          <div>
            <h2>which planet has the most moons ?</h2>
            <label>
              <input type="radio" name="question2" value="option1" />
              Venus
            </label>
            <label>
              <input type="radio" name="question2" value="option2" />
              Uranus
            </label>
            <label>
              <input type="radio" name="question2" value="option3" />
              Saturn
            </label>
          </div>
          <div>
            <h2>Which planet is the coldest ?</h2>
            <label>
              <input type="radio" name="question3" value="option1" />
              Saturn
            </label>
            <label>
              <input type="radio" name="question3" value="option2" />
              Neptune
            </label>
            <label>
              <input type="radio" name="question3" value="option3" />
              Mars
            </label>
          </div>
          <div>
            <h2>Which planet is red ?</h2>
            <label>
              <input type="radio" name="question4" value="option1" />
              Mars
            </label>
            <label>
              <input type="radio" name="question4" value="option2" />
              Mercury
            </label>
            <label>
              <input type="radio" name="question4" value="option3" />
              Jupiter
            </label>
          </div>
          <div>
            <h2>Which planet do we live on ?</h2>
            <label>
              <input type="radio" name="question5" value="option1" />
              Neptune
            </label>
            <label>
              <input type="radio" name="question5" value="option2" />
              Earth
            </label>
            <label>
              <input type="radio" name="question5" value="option3" />
              Venus
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>

        <button className="go-back-button">
          <Link to="/planets">GO BACK</Link>
        </button>
      </div>
    </div>
  );
}

export default Quiz;
