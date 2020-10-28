import { ADD_POST, ADD_DATA, FIND_DATA } from "./actionsNames";

export const newPost = (data) => {
  return {
    type: ADD_POST,
    payLoad: {
      imgUrl: data.urlImg,
      title: data.title,
      story: data.story,
      author: data.author,
    },
  };
};

export const findPost = (id) => {
  return {
    type: FIND_DATA,
    payLoad: id,
  };
};

export const setData = (data) => {
  return {
    type: ADD_DATA,
    payLoad: data,
  };
};

export const setUser = (data) => {
  console.log(data);
  return {
    type: "REGISTER_SUCCESS",
    payload: {
      user: data.user.displayName,
      token: data.token,
    },
  };
};

export const loadUser = (data) => {
  return {
    type: "USER_LOADED",
    payload: { user: data.displayName, id: data.id },
  };
};
