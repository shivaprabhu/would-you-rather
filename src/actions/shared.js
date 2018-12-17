import { handleGetQuestions } from "./questions";
import { handleGetUsers } from "./users";
import { getInitialData } from "../utils/helper";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(handleGetUsers(users));
      dispatch(handleGetQuestions(questions));
    });
  };
}
