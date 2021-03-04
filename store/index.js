import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());
store.dispatch(checkForToken());

export default store;
