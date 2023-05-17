import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import authReducer from "../Redux/Auth/authReducer";
import { productReducer } from "./Products/productReducer";
import { forgotReducer } from "./ForgotPassword/reducer";

const rootReducer = combineReducers({
  Auth: authReducer,
  Products: productReducer,
  forgetPassword: forgotReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
