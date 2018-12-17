import React, { Component } from "react";
import "../App.css";
import UserMale from "../icons/user-male.png";
import { Link } from "react-router-dom";

class Question extends Component {
  render() {
    const { question } = this.props;
    return (
      <div className="question">
        <div>
          <h3>{question.author} Asks</h3>
        </div>
        <div className="question-meta-dashboard">
          <span className="user-avatar">
            <img src={UserMale} alt="" />
          </span>
          <span className="user-question">
            <h4>Would you rather</h4>
            <p>{question.optionOne.text}</p>
            <Link to={{ pathname: `/questions/${question.id}` }}>View Poll</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Question;
