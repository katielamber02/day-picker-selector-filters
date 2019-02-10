import {
  SET_ORDERS,
  SET_SELECT_ARTICLES,
  SET_DATE,
  DELETE_ARTICLE,
  RESET
} from "../actionTypes";
import axios from "axios";

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
export const deleteArticle = id => {
  return {
    type: DELETE_ARTICLE,
    payload: id
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
      .get("https://burger-testproject.firebaseio.com/ingredients.json")
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
