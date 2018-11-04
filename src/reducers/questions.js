import {GET_QUESTIONS ,SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/questions";

export function questions(state = [], action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions
    case SAVE_QUESTION:
      return state.concat[action.question];
    default:
      return state;
  }
}
