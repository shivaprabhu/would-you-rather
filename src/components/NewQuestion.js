import React, { Component } from "react";
import "../App.css";

class NewQuestion extends Component {
  render() {
    return (
      <div className="new-question">
        <div>
          <h2>Create New Question</h2>
        </div>
        <div>
          <p>Complete the question:</p>
          <h4>Would you rather ....</h4>
          <form>
            <input type="text" name="" id="" placeholder="Enter option 1 text here" />
            <h3>OR</h3>
            <input type="text" name="" id="" placeholder="Enter option 2 text here" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewQuestion;
