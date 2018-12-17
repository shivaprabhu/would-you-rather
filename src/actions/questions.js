import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

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

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleGetQuestions(questions) {
  return getQuestions(questions);
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return dispatch =>
    Promise.resolve(_saveQuestionAnswer({ authedUser, qid, answer })).then(result => {
      dispatch(answerQuestion({ authedUser, qid, answer }));
    });
}

export function handleSaveQuestion(question) {
  return dispatch => {
    Promise.resolve(_saveQuestion(question)).then(result => {
      console.log(result);
      dispatch(saveQuestion(result));
    });
  };
}
