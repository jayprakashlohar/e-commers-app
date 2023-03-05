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
  FETCH_CART_DATA,
} from "./actionTypes";

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

// Wishlist Products
export const addToWishlist = (data) => (dispatch) => {
  return axios
    .post("https://pear-naughty-clam.cyclic.app/wishlist/createproduct", data)
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
  const responce = await axios.get(
    "https://pear-naughty-clam.cyclic.app/wishlist"
  );
  dispatch({ type: FETCH_WISHLIST_DATA, payload: responce.data });
};

export const removeWishlistItem = (id) => async (dispatch) => {
  const responce = await axios.delete(
    `https://pear-naughty-clam.cyclic.app/wishlist/delete/${id}`
  );
  dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
};

// -------------- // ---------------------------- // ------------------------------ // ----------------------------

export const singleProduct = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://pear-naughty-clam.cyclic.app/iphone/${id}`
  );
  dispatch({ type: PRODUCT_DETAILS, payload: response.data });
};

// Cart Products
export const addToCart = (data) => (dispatch) => {
  return axios
    .post("https://pear-naughty-clam.cyclic.app/cart/createproduct", data)
    .then((res) => {
      dispatch({ type: ADD_TO_CART, payload: res.data });
      return res.data.msg;
    })
    .catch((err) => {
      console.log(err);
      return err.data.msg;
    });
};

export const fetchCartData = async (dispatch) => {
  const responce = await axios.get("https://pear-naughty-clam.cyclic.app/cart");
  dispatch({ type: FETCH_CART_DATA, payload: responce.data });
};

export const removeToCart = (id) => async (dispatch) => {
  const responce = await axios.delete(
    `https://pear-naughty-clam.cyclic.app/cart/delete/${id}`
  );
  dispatch({ type: REMOVE_TO_CART, payload: id });
};

// Quantity increment and decrement
export const changeQty = (id, qty) => async (dispatch) => {
  try {
    let responce = await axios.patch(
      // `https://pear-naughty-clam.cyclic.app/cart/update/${id}`,
      `http://localhost:8080/cart/update/${id}`,
      { data: { qty } }
    );
    let data = await responce.data;
    dispatch({ type: CHANGE_CART_QTY, payload: data.data });
  } catch (err) {
    console.log(err);
  }
};
