import React, { Component } from "react";
import "../App.css";
import UserMale from "../icons/user-male.png";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class QuestionDetail extends Component {
  state = {
    selectedOption: ""
  };

  handleOnChange = e => {
    this.setState({ selectedOption: e.target.id });
  };

  render() {
    const { question, authUser, setAnswer } = this.props;

    return question !== undefined ? (
      <div className="question-detail-container">
        <div>
          <h4>{question.author} Asks</h4>
        </div>
        <div>
          <div className="user-avatar">
            <img src={UserMale} alt="" />
          </div>
          <div className="question-meta">
            <h3>Would You Rather</h3>
            <span>
              <input
                type="radio"
                name="question"
                id="optionOne"
                value={question.optionOne.text}
                onChange={e => {
                  this.handleOnChange(e);
                }}
              />
              <label htmlFor="optionOne">{question.optionOne.text}</label>
            </span>
            <span>
              <input
                type="radio"
                name="question"
                id="optionTwo"
                value={question.optionTwo.text}
                onChange={e => {
                  this.handleOnChange(e);
                }}
              />
              <label htmlFor="optionTwo">{question.optionTwo.text}</label>
            </span>
            <span>
              <button
                disabled={this.state.selectedOption === ""}
                onClick={() => {
                  setAnswer(authUser, question.id, this.state.selectedOption);
                }}
              >
                Submit
              </button>
            </span>
          </div>
        </div>
      </div>
    ) : (
      <div style={{ textAlign: "center" }}>Loading...</div>
    );
  }
}

function mapDispatchToProps(dispatch, { history }) {
  return {
    setAnswer: (authUser, questionID, answer) => {
      dispatch(handleAnswerQuestion({ authedUser: authUser, qid: questionID, answer: answer }));
      history.push(`/result/${questionID}`);
    }
  };
}

function mapStateToProps({ authUser, questions, users }, { match, history }) {
  let question = questions[match.params.id];
  if (question === undefined) {
    history.push("/pagenotfound");
    return {};
  }
  // check if the question has already been answered by the user
  // if so redirect to the poll result
  if (users[authUser] !== undefined && users[authUser] !== null) {
    let answers = Object.keys(users[authUser].answers);
    if (answers.includes(match.params.id)) {
      history.push(`/result/${match.params.id}`);
    }
  }

  if (authUser === null) {
    history.push("/");
  }

  return { authUser, question };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
