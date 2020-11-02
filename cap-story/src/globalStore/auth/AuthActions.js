import axios from "axios";

import { setUser, loadUser, logingUser } from "../actionCreator";

export const registerUser = (data) => {
  return (dispatch) => {
    dispatch({ type: " USER_LOADING" });
    const { displayName, email, password, passwordCheck } = data;
    axios
      .post("http://localhost:5000/users/register", {
        email,
        displayName,
        password,
        passwordCheck,
      })
      .then((res) => {
        axios
          .post("http://localhost:5000/users/login", {
            email,
            password,
          })
          .then((res) => {
            dispatch(setUser(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        dispatch({ type: "REGISTER_FAIL" });
      });
  };
};

export const logInUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    axios
      .post("http://localhost:5000/users/login", { email, password })
      .then((res) => {
        dispatch(logingUser(res.data));
      })
      .catch((err) => dispatch({ type: "LOGIN_FAIL" }));
  };
};
export const loadingUser = () => {
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    axios
      .post("http://localhost:5000/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        if (res.data) {
          axios
            .get("http://localhost:5000/users", {
              headers: { "x-auth-token": token },
            })
            .then((res) => {
              console.log(res.data);
              dispatch(loadUser(res.data));
            });
        }
      })
      .catch((err) => dispatch({ type: "AUTH_ERROR" }));
  };
};
