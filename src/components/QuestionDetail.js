import React, { Component } from "react";
import "../App.css";
import UserMale from "../icons/user-male.png";
import { Link } from "react-router-dom";

class QuestionDetail extends Component {
  render() {
    return (
      <div className="question-detail-container">
        <div>
          <h4>User Asks</h4>
        </div>
        <div>
          <div className="user-avatar">
            <img src={UserMale} alt="" />
          </div>
          <div className="question-meta">
            <h3>Would You Rather</h3>
            <span>
              <input type="radio" name="question" id="this" value="Option 1" />
              <label htmlFor="this">Option 1</label>
            </span>
            <span>
              <input type="radio" name="question" id="that" />
              <label htmlFor="that">Option 2</label>
            </span>
            <span>
              <Link to={{ pathname: "/result" }}>Submit</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionDetail;
