import { normalizedArticles as articles } from "../Belka/mocks/comments-belka";
import { DELETE_ARTICLE, SET_ARTICLES } from "../actionTypes";
//console.log(articles);

function articlesReducer(state = { articles }, action) {
  switch (action.type) {
    case SET_ARTICLES: {
      return action.articles;
    }

    case DELETE_ARTICLE: {
      return {
        ...state,
        articles: state.articles.filter(
          article => article.id !== action.payload.id
        )
      };
    }

    default:
      return state;
  }
}
export default articlesReducer;
