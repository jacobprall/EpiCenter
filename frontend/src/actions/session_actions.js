import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});


export const clearSessErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const clearSessionErrors = () => (dispatch) => {
  dispatch(clearSessErrors());
};

export const setUpToken = (token, dispatch) => {
  localStorage.setItem("jwtToken", token);
  APIUtil.setAuthToken(token);
  const decoded = jwt_decode(token);
  dispatch(receiveCurrentUser(decoded));
};

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user)
    .then((res) => {
      const { token } = res.data;
      setUpToken(token, dispatch);
    })
    .catch((err) => {
      dispatch(receiveErrors(err.response.data));
    });

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((res) => {
      const { token } = res.data;
      setUpToken(token, dispatch);
    })
    .catch((err) => {
      console.error(err);
      dispatch(receiveErrors(err.response.data));
    });

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};
