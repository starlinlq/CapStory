const USER_LOADING = "USER_LOADING";
const USER_LOADED = "USER_LOADED";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const AUTH_ERROR = "AUTH_ERROR";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";

const initialState = {
  token: localStorage.getItem("auth-token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  id: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        id: action.payload.id,
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("auth-token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("auth-token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default authReducer;
