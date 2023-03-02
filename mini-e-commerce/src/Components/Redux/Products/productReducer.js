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
} from "./actionTypes";

const initialState = {
  mobileData: [],
  singleProducts: [],
  wishlistData: [],
  cartData: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Products
    case FETCH_MOBILEPRODUCTS:
      return {
        ...state,
        mobileData: action.payload,
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
      };

    // Cart
    case FETCH_CART_DATA: {
      return {
        ...state,
        cartData: action.payload,
      };
    }
    // case ADD_TO_CART:
    //   let obj1 = action.payload;
    //   return {
    //     ...state,
    //     cart: [...state.cart, { ...obj1 }],
    //   };

    case REMOVE_TO_CART:
      let updated = state.cartData.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        cartData: updated,
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
