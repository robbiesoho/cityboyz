import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import authorReducer from "./authorReducer";

export default combineReducers({
  article: articleReducer,
  author: authorReducer,
});
