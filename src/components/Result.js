import React, { Component } from "react";
import "../App.css";
import UserMale from "../icons/user-male.png";

class Result extends Component {
  render() {
    return (
      <div className="question-detail-container">
        <div>
          <h4>Asked By</h4>
        </div>
        <div>
          <div className="user-avatar">
            <img src={UserMale} alt="" />
          </div>
          <div className="poll-result">
            <h3>Results</h3>
            <div className="poll-option">
              <span className="your-vote">Your Vote!</span>
              <p>
                <b>Option 1</b>
              </p>
              <span className="poll-graphic">
                <span className="poll-graphic-inner">
                  <span className="poll-graph-share">50%</span>
                </span>
              </span>
              <span className="poll-stats">1 out of 2 votes</span>
            </div>
            <div className="poll-option">
              <p>
                <b>Option 1</b>
              </p>
              <span className="poll-graphic">
                <span className="poll-graphic-inner">
                  <span className="poll-graph-share">50%</span>
                </span>
              </span>
              <span className="poll-stats">1 out of 2 votes</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
