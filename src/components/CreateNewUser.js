import React, { Component } from "react";
import { connect } from "react-redux";
import { handleCreateUser } from "../actions/users";
import { Link } from "react-router-dom";

class CreateNewUser extends Component {
  state = { fullname: "", userid: "" };

  createNewUser = e => {
    e.preventDefault();
    const { createUser, history } = this.props;
    createUser(this.state.userid, this.state.fullname);
    setTimeout(() => {
      history.push("/");
    }, 600);
  };

  handleOnInputChange = (control, value) => {
    this.setState({
      [control]: value
    });
  };

  render() {
    return (
      <div style={{ display: "block", margin: "40px auto 0", maxWidth: "400px" }}>
        <Link to="/">Back to Login</Link>
        <h2>Create New User</h2>
        <form onSubmit={this.createNewUser} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}>
            <label htmlFor="fullname" style={{ width: "100px", display: "block" }}>
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Please enter fullname"
              onChange={event => {
                this.handleOnInputChange("fullname", event.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label htmlFor="userid" style={{ width: "100px", display: "block", marginBottom: "40px" }}>
              UserID
            </label>
            <input
              type="text"
              name="userid"
              placeholder="Please enter user id"
              onChange={event => {
                this.handleOnInputChange("userid", event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            style={{ width: "160px", height: "40px", margin: "0 auto" }}
            disabled={this.state.fullname !== "" && this.state.userid !== "" ? false : true}
          >
            Create New User
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (userid, fullname) => {
      dispatch(handleCreateUser(userid, fullname));
    }
  };
}

function mapStateToProps({ users }, { history }) {
  return { users, history };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewUser);
