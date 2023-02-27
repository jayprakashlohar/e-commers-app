import {
  FETCH_MOBILEPRODUCTS,
  SORT_BY_PRICE,
  FILTER_BY_TITLE,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  PRODUCT_DETAILS,
  REMOVE_TO_CART,
  ADD_TO_CART,
  CHANGE_CART_QTY,
  FETCH_WISHLIST_DATA,
} from "./actionTypes";
// import { Dispatch } from "react-redux";
import axios from "axios";

// FETCH ALL DATA
export const fetchMobileData = (page) => async (dispatch) => {
  const responce = await axios.get(
    `https://pear-naughty-clam.cyclic.app/iphone?limit=8&page=${page}`
  );
  dispatch({ type: FETCH_MOBILEPRODUCTS, payload: responce.data });
};

// SORTING
export const sortbyPrice = (order) => async (dispatch) => {
  dispatch({ type: SORT_BY_PRICE, payload: order });
};

// FILTRING
export const filterbyTitle = (title, page) => async (dispatch) => {
  axios
    .get(`https://pear-naughty-clam.cyclic.app/iphone?limit=8&page=${page}`)
    .then((res) => {
      let data = res.data;
      dispatch({ type: FILTER_BY_TITLE, payload: { data, title } });
    })
    .catch((err) => console.log(err));
};

// -------- ---------- ------------- ------------ ------------ ---------
export const addToWishlist = (data) => (dispatch) => {
  return axios
    .post("http://localhost:8080/wishlist/createproduct", data)
    .then((res) => {
      dispatch({ type: ADD_TO_WISHLIST, payload: res.data });
      return res.data.msg;
    })
    .catch((err) => {
      console.log(err);
      return err.data.msg;
    });
};

export const fetchwishlistData = async (dispatch) => {
  const responce = await axios.get("http://localhost:8080/wishlist");
  dispatch({ type: FETCH_WISHLIST_DATA, payload: responce.data });
};

export const removeWishlistItem = (id) => async (dispatch) => {
  console.log("id",id)
  const responce = await axios.delete(
    `http://localhost:8080/wishlist/delete/${id}`
  );
  dispatch({ type: REMOVE_FROM_WISHLIST, payload: responce });
};
// ----------- ----------     ---------------- ---------


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

export const changeQty = (id, qty) => (dispatch) => {
  dispatch({
    type: CHANGE_CART_QTY,
    payload: {
      id: id,
      qty: qty,
    },
  });
};
