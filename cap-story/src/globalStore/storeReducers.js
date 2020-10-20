import { ADD_POST } from "./actionsNames";
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
              content: action.payLoad.title,
              author: action.payLoad.author,
              date: action.payLoad.date,
            },
          ],
        },
      ];
    }
    default:
      return state;
  }
};

export default contentReducer;
