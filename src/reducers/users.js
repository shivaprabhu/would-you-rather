import { GET_USERS } from "../actions/users";

export function users(state = {}, action) {
  if (action.type === GET_USERS) {
    return { ...state, ...action.users };
  }
  return state;
}
