import React, { Component } from "react";
import "../App.css";
import Question from "./Question";

class QuestionList extends Component {
  render() {
    return (
      <div className="question-list">
        <Question />
        <Question />
        <Question />
      </div>
    );
  }
}

export default QuestionList;
