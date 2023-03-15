import "../Style/Styles.css";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div className="quiz-container">
      <form>
        <div>
          <h2>Question 1</h2>
          <label>
            <input type="radio" name="question1" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="question1" value="option2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="question1" value="option3" />
            Option 3
          </label>
        </div>

        <div>
          <h2>Question 2</h2>
          <label>
            <input type="radio" name="question2" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="question2" value="option2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="question2" value="option3" />
            Option 3
          </label>
        </div>
        <div>
          <h2>Question 3</h2>
          <label>
            <input type="radio" name="question3" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="question3" value="option2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="question3" value="option3" />
            Option 3
          </label>
        </div>
        <div>
          <h2>Question 4</h2>
          <label>
            <input type="radio" name="question4" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="question4" value="option2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="question4" value="option3" />
            Option 3
          </label>
        </div>
        <div>
          <h2>Question 5</h2>
          <label>
            <input type="radio" name="question5" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="question5" value="option2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="question5" value="option3" />
            Option 3
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <button className="go-back-button">
        <Link to="/planets">GO BACK</Link>
      </button>
    </div>
  );
}

export default Quiz;
