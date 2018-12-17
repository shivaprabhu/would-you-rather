import React, { Component } from "react";
import "../App.css";
import UserProfile from "./UserProfile";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { sortedUsers } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", marginTop: "50px" }}>
        {sortedUsers.map((user, index) => (
          <UserProfile key={user.id} user={user} position={index + 1} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ authUser, users }, { history }) {
  if (authUser === null) {
    history.push("/");
  }
  
  let sortedUsers = [];
  let userIDs = Object.keys(users);
  userIDs.forEach((key, index) => {
    const score = Object.keys(users[key].answers).length + users[key].questions.length;
    users[key]["score"] = score;
    sortedUsers.push(users[key]);
    if (index + 1 === userIDs.length) {
      sortedUsers.sort((a, b) => b.score - a.score);
    }
  });
  return {
    sortedUsers
  };
}

export default connect(mapStateToProps)(Leaderboard);
