import * as types from "./types";

export const addItemToCart = (newItem) => ({
  type: types.ADD_TO_CART,
  payload: newItem,
});

export const removeItemFromCart = (productId) => ({
  type: types.REMOVE_FROM_CART,
  payload: productId,
});

export const checkout = () => ({
  type: types.CHECKOUT,
});
