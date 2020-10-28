import { combineReducers } from "redux";
import authReducer from "../auth/AuthReducer";
import contentReducer from "../../globalStore/storeReducers";

const rootReducer = combineReducers({
  user: authReducer,
  content: contentReducer,
});

export default rootReducer;
