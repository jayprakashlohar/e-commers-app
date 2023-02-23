import {
  FETCH_PRODUCTS,
  FETCH_MOBILEPRODUCTS,
  SORT_BY_PRICE,
  FILTER_BY_TITLE,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  PRODUCT_DETAILS,
  ADD_TO_CART,
  REMOVE_TO_CART,
} from "./actionTypes";

const initialState = {
  productData: [],
  mobileData: [],
  addToWish: [],
  singleProducts: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productData: action.payload,
      };
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

    case ADD_TO_WISHLIST:
      let obj = action.payload;
      return {
        ...state,
        addToWish: [...state.addToWish, { ...obj }],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        addToWish: state.addToWish.filter((item) => item.id !== action.payload),
      };

    case PRODUCT_DETAILS:
      return {
        ...state,
        singleProducts: action.payload,
      };

    case ADD_TO_CART:
      let obj1 = action.payload;
      return {
        ...state,
        cart: [...state.cart, { ...obj1 }],
      };

    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export { productReducer };
