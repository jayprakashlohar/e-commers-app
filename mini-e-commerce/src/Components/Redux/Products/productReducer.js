import { FETCH_PRODUCTS, FETCH_MOBILEPRODUCTS } from "./actionTypes";

const initialState = {
  productData: [],
  mobileData: [],
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

    default:
      return state;
  }
};

export { productReducer };
