import { FETCH_PRODUCTS } from "./actionTypes";
import axios from "axios";

export const fetchData = () => async (dispatch) => {
  const responce = await axios.get(
    "https://bug-backend-production.up.railway.app/product"
  );
  // console.log(responce)
  dispatch({ type: FETCH_PRODUCTS, payload: responce.data });
};
