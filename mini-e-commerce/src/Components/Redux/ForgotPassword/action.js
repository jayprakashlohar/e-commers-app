import axios from "axios";
import * as types from "./actionTypes";

// FORGOT API
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: types.FORGET_PASSWORD_REQUEST });

    const res = await axios.post(
      "https://pear-naughty-clam.cyclic.app/user/forgot-password",
      {
        email,
      }
    );
    // console.log("res", res);
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
      `https://pear-naughty-clam.cyclic.app/user/reset-password/${token}`,

      userInput
    );
    // console.log("res", res);
    dispatch({ type: types.RESET_PASSWORD_SUCCESS, payload: res.data.success });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: types.RESET_PASSWORD_ERROR,
      payload: error.data.success || "Something went wrong",
    });
  }
};
