import React, { Component } from "react";
import "../App.css";
import UserMale from "../icons/user-male.png";

class UserProfile extends Component {
  render() {
    return (
      <div className="user">
        <span className="position">1</span>
        <div className="user-avatar">
          <img src={UserMale} alt="" />
        </div>
        <div style={{ textAlign: "left" }}>
          <h4>User</h4>
          <p> Answered questions: 7</p>
          <p> Created questions: 3</p>
        </div>
        <div className="score">
          <p>Score</p>
          <p>10</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
