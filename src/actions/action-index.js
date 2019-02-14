import {
  SET_ORDERS,
  SET_SELECT_ARTICLES,
  SET_DATE,
  DELETE_ARTICLE,
  RESET,
  SET_ARTICLES,
  ADD_COMMENT
} from "../actionTypes";
import axios from "axios";
import { articles } from "../Belka/mocks/comments-belka";

export const addComment = (comment, articleId) => {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const setSelectArticles = selected => {
  return {
    type: SET_SELECT_ARTICLES,
    payload: { selected }
  };
};
export const setDate = date => {
  return {
    type: SET_DATE,
    payload: date
  };
};
export const remove = id => {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  };
};

export const fetchOrders = () => {
  const ingredients = {
    Mary: 2,
    Dan: 1
  };
  return dispatch => {
    axios
      .post(
        "https://burger-testproject.firebaseio.com/ingredients.json",
        ingredients
      )
      .then(response => console.log(response.data));
  };
};
export const setOrders = orders => {
  return {
    type: SET_ORDERS,
    orders: orders
  };
};
export const getOrders = () => {
  return dispatch => {
    axios
      .get("https://burger-testproject.firebaseio.com/articles.json")
      .then(response => {
        const myOrders = [];
        for (let key in response.data) {
          myOrders.push({
            id: key,
            ...response.data[key]
          });
          dispatch(setOrders(myOrders));
        }
        //console.log("myOrders", myOrders);
      });
  };
};
export const setArticles = articles => {
  return {
    type: SET_ARTICLES,
    articles: articles
  };
};
export const initializeArticlesinDB = () => {
  return dispatch => {
    axios
      .post(
        "https://burger-testproject.firebaseio.com/ingredients.json",

        articles
      )
      .then(response => response.data);
  };
};
export const getArticles = () => {
  return dispatch => {
    axios
      .get("https://burger-testproject.firebaseio.com/articles.json")
      .then(response => {
        const myOrders = [];
        for (let key in response.data) {
          myOrders.push({
            id: key,
            ...response.data[key]
          });
        }
        dispatch(setArticles(myOrders));
      });
  };
};

export const getComments = () => {
  return dispatch => {
    axios
      .get("https://burger-testproject.firebaseio.com/articles/comments.json")
      .then(response => console.log("comments", response.data));
  };
};
