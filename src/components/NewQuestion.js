import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends Component {
  render() {
    const { authUser, saveQuestion } = this.props;
    return (
      <div className="new-question">
        <div>
          <h2>Create New Question</h2>
        </div>
        <div>
          <p>Complete the question:</p>
          <h4>Would you rather....</h4>
          <form
            onSubmit={event => {
              saveQuestion(event, authUser, this.optionOneText, this.optionTwoText);
            }}
          >
            <input
              type="text"
              name="optionOneText"
              id="optionOneText"
              placeholder="Enter option 1 text here"
              ref={input => {
                this.optionOneText = input;
              }}
            />
            <h3>OR</h3>
            <input
              type="text"
              name="optionTwoText"
              id="optionTwoText"
              placeholder="Enter option 2 text here"
              ref={input => {
                this.optionTwoText = input;
              }}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser }, { history }) {
  if (authUser === null) {
    history.push("/");
  }
  return { authUser };
}
function mapDispatchToProps(dispatch) {
  return {
    saveQuestion: (e, authUser, optionOneText, optionTwoText) => {
      e.preventDefault();
      const question = { author: authUser, optionOneText: optionOneText.value, optionTwoText: optionTwoText.value };
      dispatch(handleSaveQuestion(question));
      console.log(question);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestion);
