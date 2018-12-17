import React, { Component } from "react";
import "../App.css";
import QuestionList from "./QuestionList";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    questionCategory: "unanswered"
  };

  handleQuestionCategoryChange = category => {
    this.setState({ questionCategory: category });
  };

  render() {
    return (
      <div className="question-list-container">
        <div id="question-type">
          <button
            style={{ WebkitAppearance: this.state.questionCategory === "unanswered" ? "button-bevel" : "button" }}
            onClick={() => {
              this.handleQuestionCategoryChange("unanswered");
            }}
          >
            Unanswered Question
          </button>
          <button
            style={{ WebkitAppearance: this.state.questionCategory === "answered" ? "button-bevel" : "button" }}
            onClick={() => {
              this.handleQuestionCategoryChange("answered");
            }}
          >
            Answered Question
          </button>
        </div>
        <div>
          <QuestionList category={this.state.questionCategory} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser }, props) {
  const { history } = props;
  if (authUser === null) {
    history.push("/");
  }
  return { authUser };
}

export default connect(mapStateToProps)(Home);
