import { FETCH_PRODUCTS } from "./actionTypes";

const initialState = {
  productData: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productData: action.payload,
      };

    default:
      return state;
  }
};

export { productReducer };
