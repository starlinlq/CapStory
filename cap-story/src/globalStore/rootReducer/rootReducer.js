import { combineReducers } from "redux";
import authReducer from "../auth/AuthReducer";
import contentReducer from "../../globalStore/storeReducers";
import { urlReducer } from "../../globalStore/storeReducers";

const rootReducer = combineReducers({
  user: authReducer,
  content: contentReducer,
  url: urlReducer,
});

export default rootReducer;
