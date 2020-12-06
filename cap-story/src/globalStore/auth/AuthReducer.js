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
  loginFail: null,
  isLoading: false,
  name: null,
  id: null,
  bio: null,
  interest: null,
  location: null,
  photoUrl: null,
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
        name: action.payload.user,
        id: action.payload.id,
        bio: action.payload.bio,
        interest: action.payload.interest,
        location: action.payload.location,
        photoUrl: action.payload.photoUrl,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("auth-token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        id: action.payload.user.id,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL: {
      return {
        token: localStorage.getItem("auth-token"),
        isAuthenticated: null,
        loginFail: true,
        isLoading: false,
        name: null,
        id: null,
        bio: null,
        interest: null,
        location: null,
        photoUrl: null,
      };
    }
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
