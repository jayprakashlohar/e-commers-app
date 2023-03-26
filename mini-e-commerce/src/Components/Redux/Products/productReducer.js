import {
  FETCH_MOBILEPRODUCTS,
  SORT_BY_PRICE,
  FILTER_BY_TITLE,
  REMOVE_FROM_WISHLIST,
  PRODUCT_DETAILS,
  REMOVE_TO_CART,
  CHANGE_CART_QTY,
  FETCH_WISHLIST_DATA,
  FETCH_CART_DATA,
  ADD_TO_CART,
  PRODUCT_REQUEST,
  PRODUCT_ERROR,
} from "./actionTypes";

const initialState = {
  mobileData: [],
  singleProducts: [],
  wishlistData: [],
  cartData: [],
  cartLength: 0,
  isLoading: false,
  isError: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Products
    case PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case FETCH_MOBILEPRODUCTS:
      return {
        ...state,
        mobileData: action.payload,
        isLoading: false,
        isError: false,
      };
    case SORT_BY_PRICE:
      let sortPrice;
      if (action.payload == "asc") {
        sortPrice = state.mobileData.sort((a, b) => a.price - b.price);
      } else {
        sortPrice = state.mobileData.sort((a, b) => b.price - a.price);
      }
      return {
        ...state,
        mobileData: sortPrice,
        isLoading: false,
      };

    case FILTER_BY_TITLE:
      let filterTilte;
      let { data, title } = action.payload;
      if (title === "All") {
        filterTilte = data;
      } else {
        filterTilte = data.filter((data) => data.title === title);
      }

      return {
        ...state,
        mobileData: filterTilte,
        isLoading: false,
      };

    // Wishlist

    case FETCH_WISHLIST_DATA: {
      return {
        ...state,
        wishlistData: action.payload,
      };
    }

    case REMOVE_FROM_WISHLIST:
      let updatedWish = state.wishlistData.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        wishlistData: updatedWish,
      };

    case PRODUCT_DETAILS:
      return {
        ...state,
        singleProducts: action.payload,
        isLoading: false,
      };

    // Cart
    case FETCH_CART_DATA: {
      return {
        ...state,
        cartData: action.payload,
        cartLength: action.payload.length,
      };
    }
    case ADD_TO_CART:
      return {
        ...state,
        cartLength: state.cartLength + 1,
      };

    case REMOVE_TO_CART:
      let updated = state.cartData.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        cartData: updated,
        cartLength: state.cartLength - 1,
      };

    case CHANGE_CART_QTY:
      let updatedData = state.cartData.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );

      return {
        ...state,
        cartData: updatedData,
      };

    default:
      return state;
  }
};

export { productReducer };
