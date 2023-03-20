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

export const addToWishlist = (token, data) => async (dispatch) => {
  try {
    let res = await axios({
      method: "POST",
      url: "https://pear-naughty-clam.cyclic.app/wishlist/createproduct",
      headers: {
        token,
      },
      data,
    });
    dispatch({ type: ADD_TO_WISHLIST, payload: res.data });
    return res.data.msg;
  } catch (err) {
    console.log(err);
    return err.data.msg;
  }
};

export const fetchwishlistData = (token) => async (dispatch) => {
  try {
    let responce = await axios({
      method: "GET",
      url: "https://pear-naughty-clam.cyclic.app/wishlist",
      headers: {
        token,
      },
    });
    dispatch({ type: FETCH_WISHLIST_DATA, payload: responce.data });
  } catch (err) {
    console.log(err);
  }
};

export const removeWishlistItem = (token, id) => async (dispatch) => {
  try {
    let responce = await axios({
      method: "DELETE",
      url: `https://pear-naughty-clam.cyclic.app/wishlist/delete/${id}`,
      headers: {
        token,
      },
    });
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
  } catch (err) {
    console.log(err);
  }
};

// -------------- // ---------------------------- // ------------------------------ // ----------------------------

export const singleProduct = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://pear-naughty-clam.cyclic.app/iphone/${id}`
  );
  dispatch({ type: PRODUCT_DETAILS, payload: response.data });
};

// Cart Products

export const addToCart = (token, data) => async (dispatch) => {
  try {
    let res = await axios({
      method: "POST",
      url: "https://pear-naughty-clam.cyclic.app/cart/createproduct",
      headers: {
        token,
      },
      data,
    });
    dispatch({ type: ADD_TO_CART, payload: res.data });
    return res.data.msg;
  } catch (err) {
    console.log(err);
    return err.data.msg;
  }
};

export const fetchCartData = (token) => async (dispatch) => {
  try {
    let responce = await axios({
      method: "GET",
      url: "https://pear-naughty-clam.cyclic.app/cart",
      headers: {
        token,
      },
    });
    dispatch({ type: FETCH_CART_DATA, payload: responce.data });
  } catch (err) {
    console.log(err);
  }
};

export const removeToCart = (token, id) => async (dispatch) => {
  try {
    let responce = await axios({
      method: "DELETE",
      url: `https://pear-naughty-clam.cyclic.app/cart/delete/${id}`,
      // url:  `https://pear-naughty-clam.cyclic.app/cart/delete/${id}`,
      headers: {
        token,
      },
    });
    dispatch({ type: REMOVE_TO_CART, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const changeQty = (token, id, item) => async (dispatch) => {
  try {
    let responce = await axios({
      method: "PATCH",
      url: `https://pear-naughty-clam.cyclic.app/cart/update/${id}`,
      headers: {
        token,
      },
      item,
    });
    dispatch({ type: CHANGE_CART_QTY, payload: responce.data });
  } catch (err) {
    console.log(err);
  }
};
