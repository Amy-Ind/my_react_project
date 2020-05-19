import { ADD_GOOD_CART } from "./types";

export const addCart = (good) => {
  return (dispatch) => {
    console.log("Add to cart -good", good);
    dispatch({
      type: ADD_GOOD_CART,
      payload: good,
    });
  };
};
