import { combineReducers } from "redux";
import buttonReducer from "./button";
import newsReducer from "./news";

const rootReducer = combineReducers({
  button: buttonReducer,
  news: newsReducer
})

export default rootReducer;
