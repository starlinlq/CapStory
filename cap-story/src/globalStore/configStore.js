import { createStore, applyMiddleware } from "redux";
import contentReducer from "./storeReducers";
import thunk from "redux-thunk";

const store = createStore(contentReducer, applyMiddleware(thunk));

export default store;
