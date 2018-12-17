import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/users";
import { authUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUser: ""
  };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  signIn = e => {
    const { history, authUser } = this.props;
    history.push({ pathname: "/home" });
    authUser(this.state.selectedUser);
  };

  handleUserChange = e => {
    this.setState({ selectedUser: e.target.value });
  };

  createNewUser = () => {
    const { history } = this.props;
    history.push("/createNewUser");
  };

  render() {
    const { users } = this.props;
    return (
      <div className="login-container">
        <div>
          <div>
            <h1>Welcome to would you rather app!</h1>
            <p>Please sign in to continue</p>
          </div>
          <div>
            <h2>Sign in</h2>
            <select name="user" id="" placeholder="Select User" defaultValue="default" onChange={this.handleUserChange}>
              <option value="default" disabled>
                Select User
              </option>
              {Object.keys(users).map(key => (
                <option key={users[key]["id"]} value={users[key]["id"]}>
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
            <button style={{ marginLeft: "20px" }} onClick={this.createNewUser}>
              Create new user
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {
      handleGetUsers(dispatch);
    },
    authUser: user => {
      authUser(user, dispatch);
    }
  };
}

function mapStateToProps(state, { history }) {
  return { users: state.users, authUser: state.authUser, history };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
