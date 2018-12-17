export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const GET_AUTHED_USER = "GET_AUTHED_USER";
export const SIGNOUT_USER = "SIGNOUT_USER";

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

function signoutUser() {
  return {
    type: SIGNOUT_USER
  };
}

export function authUser(user, dispatch) {
  dispatch(setAuthUser(user));
}

export function getAuthedUser() {
  return dispatch => dispatch(authedUser());
}

export function handleSignoutUser() {
  return dispatch => dispatch(signoutUser());
}
