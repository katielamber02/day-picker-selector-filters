import { SET_SELECT_ARTICLES, DELETE_ARTICLE } from "../actionTypes";

function selectReducer(state = [], action) {
  switch (action.type) {
    case SET_SELECT_ARTICLES:
      return action.payload.selected;

    case DELETE_ARTICLE:
      return [...state, state.filter(id => id !== action.payload.id)];

    default:
      return state;
  }
}
export default selectReducer;
