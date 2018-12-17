import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Question from "./Question";
import { handleInitialData } from "../actions/shared";

class QuestionList extends Component {
  componentDidMount() {
    const { getInitialData } = this.props;
    getInitialData();
  }
  render() {
    const { sortedCategoryQuestions, category } = this.props;
    return (
      <div className="question-list">
        {sortedCategoryQuestions.length > 0 ? (
          sortedCategoryQuestions.map(question => <Question key={question.id} question={question} />)
        ) : (
          <div>
            <p>There are no {category} questions at this time</p>
          </div>
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInitialData: () => {
      dispatch(handleInitialData(dispatch));
    }
  };
}

function mapStateToProps({ questions, users, authUser }, { category }) {
  let keys = Object.keys(questions);
  let sortedQuestions = [];
  let answeredQuestions = [];
  let unAnsweredQuestions = [];
  let sortedCategoryQuestions = [];
  let unAnsweredQuestionsID = [];

  keys.sort((a, b) => {
    return questions[b].timestamp - questions[a].timestamp;
  });

  keys.forEach((key, index) => {
    sortedQuestions.push(questions[key]);
    if (keys.length === index + 1) {
      sortByCategory();
    }
  });

  function sortByCategory() {
    if (users[authUser] !== undefined && users[authUser] !== null) {
      let answeredQuestionsID = Object.keys(users[authUser].answers);
      if (answeredQuestionsID.length > 0) {
        answeredQuestionsID.forEach((id, index) => {
          answeredQuestions.push(questions[id]);
          // filter out the answered question IDs
          if (unAnsweredQuestionsID.length === 0) {
            unAnsweredQuestionsID = keys.filter(key => key !== id);
          } else {
            unAnsweredQuestionsID = unAnsweredQuestionsID.filter(key => key !== id);
          }
          // populate unanswered questions array with question  obj
          if (index + 1 === answeredQuestionsID.length) {
            unAnsweredQuestionsID.forEach((id, index) => {
              unAnsweredQuestions.push(questions[id]);
              // filter based on selected category, defult being unanswered
              if (index + 1 === unAnsweredQuestionsID.length) {
              }
            });
          }
        });
      } else {
        keys.forEach(key => {
          unAnsweredQuestions.push(questions[key]);
        });
      }
    }
  }
  if (category === "unanswered") {
    sortedCategoryQuestions = unAnsweredQuestions;
  } else {
    sortedCategoryQuestions = answeredQuestions;
  }
  return { sortedCategoryQuestions };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);
