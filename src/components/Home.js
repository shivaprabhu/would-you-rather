import React, { Component } from "react";
import "../App.css";
import QuestionList from "./QuestionList";
import { Context } from "../index";
import { handleGetQuestions } from "../actions/questions";

class ConnectedHome extends Component {
  render() {
    return <Context.Consumer>{store => <Home store={store} />}</Context.Consumer>;
  }
}

class Home extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.dispatch(handleGetQuestions());
    store.subscribe(() => {
      this.forceUpdate();
      console.log("questions ", store.getState());
    });
  }
  render() {
    const { store } = this.props;
    const { questions } = store.getState();
    return (
      <div className="question-list-container">
        <div id="question-type">
          <button>Unanswered Question</button>
          <button>Answered Question</button>
        </div>
        <div>
          <QuestionList />
        </div>
      </div>
    );
  }
}

export default ConnectedHome;
