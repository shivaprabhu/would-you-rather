import React, { Component } from "react";
import "../App.css";
import UserProfile from "./UserProfile";

class Leaderboard extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", marginTop: "50px" }}>
        <UserProfile />
        <UserProfile />
      </div>
    );
  }
}

export default Leaderboard;
