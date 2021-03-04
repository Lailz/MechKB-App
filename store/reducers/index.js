import { combineReducers } from "redux";

import authReducer from "./authReducer";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  authReducer,
  productReducer, // === productReducer: productReducer,
  shopReducer, // === shopReducer: shopReducer,
  cartReducer,
});

export default rootReducer;
