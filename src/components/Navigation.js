import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import userMale from "../icons/user-male.png";
import { handleSignoutUser } from "../actions/authedUser";

class Navigation extends Component {
  signoutUser = () => {
    const { signout } = this.props;
    signout();
  };
  render() {
    const { authUser } = this.props;

    return (
      <div>
        {authUser !== null && (
          <div className="nav">
            <div className="nav-items">
              <NavLink to={{ pathname: "/home" }} activeClassName="nav-active">
                Home
              </NavLink>
              <NavLink to={{ pathname: "/add" }}>New Question</NavLink>
              <NavLink to={{ pathname: "/leaderboard" }}>Leader Board</NavLink>
            </div>
            <div>
              <div>
                <a href="void(0)" id="username">
                  Hello, {authUser}!
                </a>
                <img src={userMale} alt={authUser} style={{ width: "30px", height: "30px", marginRight: "50px" }} />
              </div>
              <button className="nobg" onClick={this.signoutUser}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signout: () => {
      dispatch(handleSignoutUser());
    }
  };
}

function mapStateToProps(authUser) {
  return authUser;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
