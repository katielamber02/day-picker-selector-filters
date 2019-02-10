import { combineReducers } from "redux";
import mainReducer from "./main-reducer";
import articlesReducer from "./articles";
import selectReducer from "./select";
import dateRangeReducer from "./dateRange";

export default combineReducers({
  main: mainReducer,
  articles: articlesReducer,
  selected: selectReducer,
  dateRange: dateRangeReducer
});
