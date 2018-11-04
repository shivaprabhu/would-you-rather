export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const GET_AUTHED_USER = "GET_AUTHED_USER";

function setAuthUser(authUser) {
  return {
    type: SET_AUTHED_USER,
    authUser
  };
}

function authedUser() {
  return {
    type: GET_AUTHED_USER
  };
}

export function authUser(user) {
  return dispatch => dispatch(setAuthUser(user));
}

export function getAuthedUser() {
  return dispatch => dispatch(authedUser());
}
