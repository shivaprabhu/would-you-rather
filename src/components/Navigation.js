import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Context } from "../index";
import { getAuthedUser } from "../actions/authedUser";

import userMale from "../icons/user-male.png";

class ConnectedNav extends Component {
  render() {
    return <Context.Consumer>{store => <Navigation store={store} />}</Context.Consumer>;
  }
}

class Navigation extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.dispatch(getAuthedUser());
    store.subscribe(() => {
      const { authUser } = store.getState();
      if (authUser !== null) {
        this.forceUpdate();
      }
    });
  }
  render() {
    const { store } = this.props;
    const { authUser } = store.getState();

    return (
      <div className="nav">
        <div className="nav-items">
          <Link to={{ pathname: "/home" }}>Home</Link>
          <Link to={{ pathname: "/newquestion" }}>New Question</Link>
          <Link to={{ pathname: "/leaderboard" }}>Leader Board</Link>
        </div>
        {authUser !== null && (
          <div>
            <div>
              <a href="void(0)" id="username">
                Hello, {authUser}!
              </a>
              <img src={userMale} alt={authUser} style={{ width: "30px", height: "30px", marginRight: "50px" }} />
            </div>
            <button className="nobg">Logout</button>
          </div>
        )}
      </div>
    );
  }
}

export default ConnectedNav;
