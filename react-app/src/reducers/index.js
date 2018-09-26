import { combineReducers } from "redux";
import movies from "./movies";
import currentMovie from "./currentMovie";

export default combineReducers({
    movies,
    currentMovie
});
