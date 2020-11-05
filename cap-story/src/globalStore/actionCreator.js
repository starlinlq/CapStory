import { ADD_POST, ADD_DATA, FIND_DATA } from "./actionsNames";
import axios from "axios";

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

export const logingUser = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
      token: data.token,
      user: data.user,
    },
  };
};

export const setUrl = (url) => {
  console.log(url);
  return {
    type: "ADD_URL",
    payload: url,
  };
};

export const postComment = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:5000/comments",
        { ...data },
        { headers: { "x-auth-token": data.token } }
      )
      .then((res) => dispatch({ type: "ADD_COMMENT", payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const getComments = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/comments/all")
      .then((res) => dispatch({ type: "GET_COMMENTS", payload: res.data }))
      .catch((err) => {
        console.log(err);
      });
  };
};
