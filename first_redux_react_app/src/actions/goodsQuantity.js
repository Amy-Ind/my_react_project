import React, { Component } from "react";
import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./types";

export const goodsQuantity = (action, name) => {
  return (dispatch) => {
    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name,
    });
  };
};
