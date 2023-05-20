import axios from "axios";
import * as types from "./actionTypes";

// FORGOT API
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: types.FORGET_PASSWORD_REQUEST });

    const res = await axios.post(
      "https://bug-backend-production.up.railway.app/user/forgot-password",
      {
        email,
      }
    );

    dispatch({ type: types.FORGET_PASSWORD_SUCCESS, payload: res.data.msg });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.FORGET_PASSWORD_ERROR,
      payload: error.data.message || "Something went wrong",
    });
  }
};

// RESET API
export const resetPassword = (userInput, token) => async (dispatch) => {
  try {
    dispatch({ type: types.RESET_PASSWORD_REQUEST });

    const res = await axios.post(
      `https://bug-backend-production.up.railway.app/user/reset-password/${token}`,

      userInput
    );

    dispatch({ type: types.RESET_PASSWORD_SUCCESS, payload: res.data.success });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: types.RESET_PASSWORD_ERROR,
      payload: error.data.success || "Something went wrong",
    });
  }
};
