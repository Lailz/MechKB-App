import { combineReducers } from "redux";

import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  productReducer, // === productReducer: productReducer,
  shopReducer, // === shopReducer: shopReducer,
  cartReducer,
});

export default rootReducer;
