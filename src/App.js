import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ConnectedNavigation from "./components/Navigation";
import ConnectedLogin from "./components/Login";
import ConnectedHome from "./components/Home";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import QuestionDetail from "./components/QuestionDetail";
import Result from "./components/Result";

class App extends Component {
  render() {
    return (
      <div>
        <ConnectedNavigation />
        <Route exact path="/" render={({ history }) => <ConnectedLogin history={history} />} />
        <Route path="/home" component={ConnectedHome} />
        <Route path="/newquestion" component={NewQuestion} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/questiondetail" component={QuestionDetail} />
        <Route path="/result" component={Result} />
      </div>
    );
  }
}

export default App;
