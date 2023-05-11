import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGOUT,
} from "../Auth/actionTypes";

import axios from "axios";

export const authRegister = (data) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REGISTER_REQUEST });

    const res = await axios.post(
      "https://pear-naughty-clam.cyclic.app/user/signup",
      // "http://localhost:8080/user/signup",
      {
        email: data.email,
        name: data.name,
        password: data.password,
      }
    );
    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: {
        message: res.data.response,
      },
    });
  } catch (error) {
    dispatch({
      type: AUTH_REGISTER_FAILURE,
      payload: {
        message: error.response.data.response,
      },
    });
  }
};

export const authLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOGIN_REQUEST });

    const res = await axios.post(
      "https://pear-naughty-clam.cyclic.app/user/login",
      // "http://localhost:8080/user/login",

      data
    );
    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: {
        token: res.data.token,
        message: res.data.token,
        user: res.data.user,
      },
    });
    return res;
  } catch (error) {
    dispatch({
      type: AUTH_LOGIN_FAILURE,
      payload: {
        message: error.response.data.response,
      },
    });
    return Promise.reject(error);
  }
};

export const logout = (dispatch) => {
  dispatch({ type: AUTH_LOGOUT });
};
