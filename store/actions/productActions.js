// ACTION TYPES
import * as types from "./types";
import instance from "./instance";

// ACTIONS

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await instance.get("/products");
    dispatch({
      type: types.FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
