import { combineReducers } from "redux";
import { routerReducer } from "react-router-dom";

import posts from "./posts";
import comments from "./comments";

const rootReducer = combineReducers({ posts, comments, router: routerReducer });

export default rootReducer;