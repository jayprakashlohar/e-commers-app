import { FETCH_PRODUCTS, FETCH_MOBILEPRODUCTS } from "./actionTypes";
import axios from "axios";

export const fetchData = () => async (dispatch) => {
  const responce = await axios.get(
    "https://bug-backend-production.up.railway.app/product"
  );
  // console.log(responce)
  dispatch({ type: FETCH_PRODUCTS, payload: responce.data });
};

export const fetchMobileData = () => async (dispatch) => {
  const responce = await axios.get(
    "https://bug-backend-production.up.railway.app/iphone"
  );
  // console.log(responce)
  dispatch({ type: FETCH_MOBILEPRODUCTS, payload: responce.data });
};
