import * as types from "../actions/types";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECKOUT:
      alert("Thank you for shopping with us");
      return {
        ...state,
        items: [],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case types.ADD_TO_CART:
      const newItem = action.payload;
      const foundItemIndex = state.items.findIndex(
        (item) => item.productId === newItem.productId
      );
      if (foundItemIndex >= 0) {
        state.items[foundItemIndex] = {
          productId: newItem.productId,
          quantity: newItem.quantity + state.items[foundItemIndex].quantity,
        };
        return {
          ...state,
          items: state.items,
        };
      } else
        return {
          ...state,
          items: [...state.items, action.payload],
        };
    default:
      return state;
  }
};

export default reducer;
