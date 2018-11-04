import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

export function handleGetQuestions() {
  return dispatch =>
    Promise.resolve(_getQuestions()).then(questions => {
      dispatch(getQuestions(questions));
    });
}

export function handleSaveQuestion(question) {
  return dispatch => {
    dispatch(saveQuestion(question));
    Promise.resolve(_saveQuestion(question)).catch(e => {
      //TODO
      //remove question
      console.log(e);
    });
  };
}
