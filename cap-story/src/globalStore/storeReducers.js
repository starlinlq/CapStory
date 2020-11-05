import { ADD_POST, ADD_DATA, FIND_DATA } from "./actionsNames";
const initialState = [];
const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA: {
      return [...action.payLoad];
    }

    default:
      return state;
  }
};

export const urlReducer = (state = { url: "" }, action) => {
  switch (action.type) {
    case "ADD_URL": {
      return { ...state, url: action.payload };
    }

    default:
      return state;
  }
};

export default contentReducer;
