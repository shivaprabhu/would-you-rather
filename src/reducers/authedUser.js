import { SET_AUTHED_USER, GET_AUTHED_USER } from "../actions/authedUser";

export function authUser(state = null, action) {
  if (action.type === SET_AUTHED_USER) {
    return action.authUser;
  }
  if (action.type === GET_AUTHED_USER) {
    return state;
  }
  return state;
}
