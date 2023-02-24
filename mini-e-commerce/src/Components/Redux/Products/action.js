import {
  FETCH_PRODUCTS,
  FETCH_MOBILEPRODUCTS,
  SORT_BY_PRICE,
  FILTER_BY_TITLE,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  PRODUCT_DETAILS,
  REMOVE_TO_CART,
  ADD_TO_CART,
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
export const fetchMobileData = (page) => async (dispatch) => {
  const responce = await axios.get(
    // "https://pear-naughty-clam.cyclic.app/iphone"
    `http://localhost:8080/iphone?limit=8&page=${page}`
  );
  dispatch({ type: FETCH_MOBILEPRODUCTS, payload: responce.data });
};

// SORTING
export const sortbyPrice = (order) => async (dispatch) => {
  dispatch({ type: SORT_BY_PRICE, payload: order });
};

// FILTRING
export const filterbyTitle = (title,page) => async (dispatch) => {
  axios
    // .get("https://pear-naughty-clam.cyclic.app/iphone")
    .get(`http://localhost:8080/iphone?limit=8&page=${page}`)
    .then((res) => {
      let data = res.data;
      dispatch({ type: FILTER_BY_TITLE, payload: { data, title } });
    })
    .catch((err) => console.log(err));
};

export const addToWishlist = (data) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: data,
  };
};

export const removeWishlistItem = (data) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: data,
  };
};

export const singleProduct = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://pear-naughty-clam.cyclic.app/iphone/${id}`
  );
  dispatch({ type: PRODUCT_DETAILS, payload: response.data });
};

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeToCart = (data) => {
  return {
    type: REMOVE_TO_CART,
    payload: data,
  };
};
