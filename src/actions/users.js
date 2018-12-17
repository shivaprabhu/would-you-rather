import { _createNewUser } from "../utils/_DATA";

export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function createUser(userid, fullname) {
  return {
    type: CREATE_USER,
    fullname,
    userid
  };
}

export function handleGetUsers(users) {
  return getUsers(users);
}

export function handleCreateUser(userid, fullname) {
  return dispatch =>
    _createNewUser(userid, fullname).then(() => {
      dispatch(createUser(userid, fullname));
    });
}
