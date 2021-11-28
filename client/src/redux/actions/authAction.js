import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";
import { returnErrors } from "./errorAction";
import axios from "axios";

export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING,
  });

  axios
    .get("/api/users/auth", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response, "err.response");
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const register =
  ({ name, email, password }) =>
  (dispatch) => {
    console.log("Register from authAction");
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    axios
      .post("/api/users", body, config)
      .then((res) => {
        console.log(res, "REGISTER_SUCCESS");

        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response, "err.response");
        dispatch(
          returnErrors(err.response.data.error, err.response.status, "REGISTER_FAIL")
        );
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
