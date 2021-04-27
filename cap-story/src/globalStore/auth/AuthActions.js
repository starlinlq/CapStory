import axios from "axios";

import { setUser, loadUser, logingUser } from "../actionCreator";

export const registerUser = (data) => {
  return (dispatch) => {
    dispatch({ type: " USER_LOADING" });
    const { displayName, email, password, passwordCheck } = data;
    axios
      .post("http://127.0.0.1:3333/api/signup", {
        email,
        username: displayName,
        password,
      })
      .then((res) => {
        console.log(res.data);
        /*   dispatch(setUser(res.data)); */
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAIL" });
      });
  };
};

export const logInUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    axios
      .post("http://127.0.0.1:3333/api/login", { email, password })
      .then((res) => {
        dispatch(logingUser(res.data));
      })
      .catch((err) => dispatch({ type: "LOGIN_FAIL" }));
  };
};
export const loadingUser = () => {
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });

    let auth = localStorage.getItem("Authorization");
    axios
      .get("http://127.0.0.1:3333/api/user/validate", {
        headers: { Authorization: auth },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(loadUser(res.data));
      })
      .catch((err) => dispatch({ type: "AUTH_ERROR" }));
  };
};
