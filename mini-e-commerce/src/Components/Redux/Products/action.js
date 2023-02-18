import {
  FETCH_PRODUCTS,
  FETCH_MOBILEPRODUCTS,
  SORT_BY_PRICE,
  FILTER_BY_TITLE,
  PAGINATION,
} from "./actionTypes";

import axios from "axios";

export const fetchData = () => async (dispatch) => {
  const responce = await axios.get(
    "https://bug-backend-production.up.railway.app/product"
  );
  // console.log(responce)
  dispatch({ type: FETCH_PRODUCTS, payload: responce.data });
};

// FETCH ALL DATA
export const fetchMobileData = () => async (dispatch) => {
  const responce = await axios.get(
    "https://bug-backend-production.up.railway.app/iphone"
  );
  dispatch({ type: FETCH_MOBILEPRODUCTS, payload: responce.data });
};

// SORTING
export const sortbyPrice = (order) => async (dispatch) => {
  dispatch({ type: SORT_BY_PRICE, payload: order });
};

// FILTRING
export const filterbyTitle = (title) => async (dispatch) => {
  axios
    .get("https://bug-backend-production.up.railway.app/iphone")
    .then((res) => {
      let data = res.data;
      dispatch({ type: FILTER_BY_TITLE, payload: { data, title } });
    })
    .catch((err) => console.log(err));
};
