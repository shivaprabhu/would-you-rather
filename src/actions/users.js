import { _getUsers } from "../utils/_DATA";

export const GET_USERS = "GET_USERS";

function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function handleGetUsers() {
  return dispatch =>
    _getUsers().then(users => {
      dispatch(getUsers(users));
    });
}
