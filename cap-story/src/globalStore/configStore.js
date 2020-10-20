import { createStore } from "redux";
import contentReducer from "./storeReducers";

const store = createStore(contentReducer);

export default store;
