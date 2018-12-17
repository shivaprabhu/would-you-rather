import React, { Component } from "react";
import "../App.css";
import UserMale from "../icons/user-male.png";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    const { question } = this.props;
    return question !== undefined && question !== null ? (
      <div className="question-detail-container">
        <div>
          <h4>Asked By {question.author}</h4>
        </div>
        <div>
          <div className="user-avatar">
            <img src={UserMale} alt="" />
          </div>
          <div className="poll-result">
            <h3>Results</h3>
            <div className="poll-option">
              {question.yourvote === "optionOne" && <span className="your-vote">Your Vote!</span>}
              <p>
                <b>Option 1</b>
              </p>
              <span className="poll-graphic">
                <span className="poll-graphic-inner" style={{ width: `${question.optionOneVoteShare}%` }}>
                  <span className="poll-graph-share">{question.optionOneVoteShare}%</span>
                </span>
              </span>
              <span className="poll-stats">
                {question.optionOneVotes} out of {question.totalVotes} votes
              </span>
            </div>
            <div className="poll-option optionTwo">
              {question.yourvote === "optionTwo" && <span className="your-vote">Your Vote!</span>}
              <p>
                <b>Option 2</b>
              </p>
              <span className="poll-graphic">
                <span className="poll-graphic-inner" style={{ width: `${question.optionTwoVoteShare}%` }}>
                  <span className="poll-graph-share">{question.optionTwoVoteShare}%</span>
                </span>
              </span>
              <span className="poll-stats">
                {question.optionTwoVotes} out of {question.totalVotes} votes
              </span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div style={{ textAlign: "center" }}>Loading...</div>
    );
  }
}

function mapStateToProps({ authUser, questions }, { history, match }) {
  if (authUser == null) {
    history.push("/");
  }

  let question = questions[match.params.id];
  if (question !== undefined) {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    question.totalVotes = totalVotes;
    question.optionOneVotes = optionOneVotes;
    question.optionTwoVotes = optionTwoVotes;
    question.optionOneVoteShare = Math.floor((optionOneVotes / totalVotes) * 100);
    question.optionTwoVoteShare = Math.floor((optionTwoVotes / totalVotes) * 100);

    if (question.optionOne.votes.includes(authUser)) {
      question.yourvote = "optionOne";
    }

    if (question.optionTwo.votes.includes(authUser)) {
      question.yourvote = "optionTwo";
    }
  }
  else{
    history.push("/pagenotfound")
  }
  return { question };
}

export default connect(mapStateToProps)(Result);
