import React, { Component } from "react";
import "../App.css";
import UserMale from "../icons/user-male.png";
import {Link} from "react-router-dom";

class Question extends Component {
  render() {
    return (
      <div className="question">
        <div>
          <h3>User Asks</h3>
        </div>
        <div className="question-meta-dashboard">
          <span className="user-avatar">
            <img src={UserMale} alt="" />
          </span>
          <span className="user-question">
            <h4>Would you rather</h4>
            <p>base jump</p>
            <Link to={{pathname:"/questiondetail"}}>View Poll</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Question;
