const logger = store => next => action => {
  console.group(action.type);
  console.log(`The action is ${action.type}`);
  const returenValue = next(action);
  console.log("The new state is", store.getState());
  console.groupEnd();
  return returenValue;
};

export default logger;
