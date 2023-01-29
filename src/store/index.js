import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducers from "./reducers/todoReducers";
const store = createStore(combineReducers({ todoReducers }), applyMiddleware(thunk));

export default store;
