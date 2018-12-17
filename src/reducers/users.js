import { GET_USERS, CREATE_USER } from "../actions/users";

export function users(state = {}, action) {
  if (action.type === GET_USERS) {
    return { ...state, ...action.users };
  }
  if (action.type === CREATE_USER) {
    return Object.assign(state, {
      [action.userid]: {
        id: action.userid,
        name: action.fullname,
        questions: [],
        answers: {},
        avatarURL: ""
      }
    });
  }
  return state;
}
