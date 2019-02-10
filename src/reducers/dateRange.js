import { SET_DATE, RESET, DELETE_ARTICLE } from "../actionTypes";

function dateRangeReducer(state = { from: null, to: null }, action) {
  const { type } = action;

  switch (type) {
    case SET_DATE:
      const date = action.payload;
      const { from, to } = date;
      console.log(date);
      return { from, to };

    case RESET:
      console.log((state = { from: null, to: null }));
      return { from: null, to: null };

    case DELETE_ARTICLE:
      return [...state, state.filter(id => id !== action.payload.id)];

    default:
      return state;
  }
}
export default dateRangeReducer;
