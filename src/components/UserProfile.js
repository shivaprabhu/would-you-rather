import React from "react";
import "../App.css";
import UserMale from "../icons/user-male.png";

function UserProfile(props) {
  const { user, position } = props;
  return (
    <div className="user">
      {position <= 3 && (
        <span className="position" id={`postion${position}`}>
          {position}
        </span>
      )}
      <div className="user-avatar">
        <img src={UserMale} alt="" />
      </div>
      <div style={{ textAlign: "left" }}>
        <h4>{user.name}</h4>
        <p> Answered questions: {Object.keys(user.answers).length}</p>
        <p> Created questions: {user.questions.length}</p>
      </div>
      <div className="score">
        <p>Score</p>
        <p>{user.score}</p>
      </div>
    </div>
  );
}

export default UserProfile;
