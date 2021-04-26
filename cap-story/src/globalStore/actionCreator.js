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
      user: data.user,
      token: data.token,
    },
  };
};

export const loadUser = ({ user }) => {
  return {
    type: "USER_LOADED",
    payload: { ...user.profile },
  };
};

export const logingUser = ({ user, token }) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
      user,
      token,
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

export function deleteComment(post_id) {
  return { type: "DELETE_COMMENT", payload: { postId: post_id } };
}

export const removeComment = (post_id, token) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:5000/comments/delete",
        { postId: post_id },

        {
          headers: { "x-auth-token": token },
        }
      )
      .then((res) => dispatch(deleteComment(post_id)))
      .catch((err) => console.log(err));
  };
};

export const handleUserUpdate = ({ token, ...data }) => {
  return (dispatch) => {
    let auth = localStorage.getItem("Authorization");
    /* console.log(data) */
    axios
      .put(
        `http://127.0.0.1:3333/api/user/profile`,
        { ...data },
        {
          headers: { Authorization: auth },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
};

export function savedMemory(userId, item, token) {
  return axios
    .post(
      "http://localhost:5000/users/saved",
      { userId, item },
      { headers: { "x-auth-token": token } }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

export const removeSaveMemory = (userId, postId, token) => {
  return axios
    .post(
      "http://localhost:5000/users/detelesaved",
      { removePostId: postId, userId },
      { headers: { "x-auth-token": token } }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export function loadSaved(data) {
  return {
    type: "loadSaved",
    payLoad: { ...data },
  };
}
