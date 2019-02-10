import { articles } from "../Belka/mocks/comments-belka";
import { DELETE_ARTICLE } from "../actionTypes";
console.log(articles);

function articlesReducer(state = { articles }, action) {
  switch (action.type) {
    case DELETE_ARTICLE:
      return articles.filter(article => article.id !== action.payload.id);
    default:
      return state;
  }
}
export default articlesReducer;
