import { combineReducers } from "redux";

import { users } from "../reducers/users";
import { authUser } from "../reducers/authedUser";
import { questions } from "../reducers/questions";


export default combineReducers({ users, authUser,questions });
