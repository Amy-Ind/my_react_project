import { combineReducers } from "redux";
import {
  ADD_GOOD_CART,
  GET_GOOD_NUMBER,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/types";

const initialState = {
  goodNumbers: 0,

  goodList: {},
};

export default (state = initialState, action) => {
  let goodOperated = "";
  switch (action.type) {
    case ADD_GOOD_CART:
      // console.log("action.payload===", action.payload);
      const tempPayload = action.payload.payload;
      let addGood = { ...state.goodList[tempPayload.title] };

      addGood.goodName = tempPayload.title;
      addGood.image = tempPayload.image;
      if (typeof state.goodList[tempPayload.title] === "undefined") {
        addGood.number = 1;
      } else {
        addGood.number += 1;
      }

      addGood.inCart = true;
      //console.log("addGood===after=", addGood);

      return {
        ...state,
        goodNumbers: state.goodNumbers + 1,
        goodList: {
          ...state.goodList,
          [tempPayload.title]: addGood,
        },
      };
    case GET_GOOD_NUMBER: {
      return {
        ...state,
      };
    }
    case INCREASE_QUANTITY: {
      console.log("==action.payload====", action.payload);
      goodOperated = { ...state.goodList[action.payload] };
      goodOperated.goodName = action.payload;
      console.log("==goodOperated====", goodOperated);
      console.log("====goodOperated.goodName==", goodOperated.goodName);

      goodOperated.number += 1;
      console.log("===goodOperated.number===", goodOperated.number);
      //   return {
      //     ...state,
      //   };
      return {
        ...state,
        goodNumbers: state.goodNumbers + 1,
        goodList: {
          ...state.goodList,
          [action.payload]: goodOperated,
        },
      };
    }
    case DECREASE_QUANTITY: {
      goodOperated = { ...state.goodList[action.payload] };
      //console.log("======", goodOperated);
      let tempGoodNumbers = state.goodNumbers;
      if (goodOperated.number === 0) {
        goodOperated.number = 0;
      } else {
        goodOperated.number -= 1;
        tempGoodNumbers -= 1;
      }
      //console.log("===goodOperated.number===", goodOperated.number);
      return {
        ...state,
        goodNumbers: tempGoodNumbers,
        goodList: {
          ...state.goodList,
          [action.payload]: goodOperated,
        },
      };
    }
    default:
      return state;
  }
};
