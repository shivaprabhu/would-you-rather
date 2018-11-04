import React, { Component } from "react";
import "../App.css";
import { handleGetUsers } from "../actions/users";
import { Context } from "../index";
import { authUser } from "../actions/authedUser";

class ConnectedLogin extends Component {
  render() {
    const { history } = this.props;
    return <Context.Consumer>{store => <Login store={store} dispatch={store.dispatch} history={history} />}</Context.Consumer>;
  }
}

class Login extends Component {
  state = {
    selectedUser: ""
  };

  componentDidMount() {
    const { store } = this.props;
    store.dispatch(handleGetUsers());
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  signIn = e => {
    const { history, store } = this.props;
    history.push({ pathname: "/home" });
    store.dispatch(authUser(this.state.selectedUser));
  };

  handleUserChange = e => {
    this.setState({ selectedUser: e.target.value });
  };

  render() {
    const { store } = this.props;
    const { users } = store.getState();

    return (
      <div className="login-container">
        <div>
          <div>
            <h3>Welcome to would you rather app!</h3>
            <p>Please sign in to continue</p>
          </div>
          <div>
            <h2>Sign in</h2>
            <select name="user" id="" placeholder="Select User" defaultValue="default" onChange={this.handleUserChange}>
              <option value="default" disabled>
                Select User
              </option>
              {Object.keys(users).map(key => (
                <option key={users[key]["id"]} value={users[key]["name"]}>
                  {users[key]["name"]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              disabled={this.state.selectedUser === ""}
              onClick={e => {
                this.signIn(e);
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConnectedLogin;
