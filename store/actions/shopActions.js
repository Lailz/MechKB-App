// ACTION TYPES
import * as types from "./types";
import instance from "./instance";
// ACTIONS

export const fetchShops = () => async (dispatch) => {
  try {
    const res = await instance.get("/shops");
    console.log(res.data);
    dispatch({
      type: types.FETCH_SHOPS,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
