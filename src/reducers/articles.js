import { normalizedArticles as articles } from "../Belka/mocks/comments-belka";
import { DELETE_ARTICLE, SET_ARTICLES, ADD_COMMENT } from "../actionTypes";
//console.log(articles);

import { arrToMap, mapToArr } from "../helpers";

function articlesReducer(state = { articles }, action) {
  switch (action.type) {
    // case SET_ARTICLES: {
    //   return action.articles;
    // }

    // //state = { articles }
    // case DELETE_ARTICLE: {
    //   return {
    //     ...state,
    //     articles: state.articles.filter(
    //       article => article.id !== action.payload.id
    //     )
    //   };
    // }

    case ADD_COMMENT: {
      //const article = state.articles[action.payload.articleId];
      let articleState = arrToMap(articles);
      console.log("ARTSTATE:", articleState);
      console.log(
        "ACTION ART:",
        "state",
        state,
        "payload",
        action.payload,
        "randomId",
        action.randomId
      );
      const article = articleState[action.payload.articleId];
      console.log("---article", article);
      let newState = {
        ...articleState,
        [action.payload.articleId]: {
          ...article,
          comments:
            article.comments.concat(action.randomId) ||
            [].concat(action.randomId)
        }
      };
      console.log("NEW STATE----", newState);
      return {
        articles: mapToArr(newState)
      };
    }

    default:
      return state;
  }
}
export default articlesReducer;
