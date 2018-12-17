import React, { Component } from "react";
import "./App.css";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import QuestionDetail from "./components/QuestionDetail";
import Result from "./components/Result";
import CreateNewUser from "./components/CreateNewUser";
import PageNotFound from "./components/PageNotFound";

import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    const { getInitialData } = this.props;
    getInitialData();
  }
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" render={({ history }) => <Login history={history} />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/add" component={NewQuestion} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/questions/:id" component={QuestionDetail} />
        <Route exact path="/result/:id" component={Result} />
        <Route exact path="/createNewUser" component={CreateNewUser} />
        <Route path="/pagenotfound" component={PageNotFound} />
        {/*<Redirect from="*" to="/pagenotfound" /> */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInitialData: () => {
      dispatch(handleInitialData());
    }
  };
}

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    users
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
