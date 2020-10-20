import { ADD_POST, ADD_DATA } from "./actionsNames";
const initialState = [];
const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return [
        ...state,
        {
          userPosts: [
            {
              imgUrl: action.payLoad.url,
              title: action.payLoad.title,
              story: action.payLoad.story,
              author: action.payLoad.author,
            },
          ],
        },
      ];
    }
    case ADD_DATA: {
      return [...action.payLoad];
    }
    default:
      return state;
  }
};

export default contentReducer;
