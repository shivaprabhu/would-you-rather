import { GET_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/questions";

export function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.questions };
    case SAVE_QUESTION:
      return { ...state, [action.question.id]: action.question };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            votes: state[action.qid][action.answer].votes.concat([action.authedUser]),
            text: state[action.qid][action.answer].text
          }
        }
      };
    default:
      return state;
  }
}
