import { normalizedComments as comments } from "./../Belka/mocks/comments-belka";
import { ADD_COMMENT } from "../actionTypes";
import { arrToMap, mapToArr } from "../helpers";

const commentsMap = arrToMap(comments);

export const commentsReducer = (state = commentsMap, action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case ADD_COMMENT:
      //console.log("state:", state, "payload:", payload);

      return {
        ...state,
        [randomId]: {
          id: randomId,
          user: payload.comment.user,
          text: payload.comment.text
        }
      };
    default:
      return mapToArr(state);
  }
};
export default commentsReducer;
