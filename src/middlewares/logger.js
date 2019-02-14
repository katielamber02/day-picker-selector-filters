export default store => next => action => {
  console.log("BEFORE", store.getState().selected);
  console.log(action.payload);

  next(action);
  console.log("AFTER", store.getState().selected);
};
