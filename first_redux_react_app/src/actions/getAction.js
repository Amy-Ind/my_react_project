import { GET_GOOD_NUMBER } from "./types";
export const getNumbers = () => {
  return (dispatch) => {
    console.log("Getting all goods numbers");
    dispatch({
      type: GET_GOOD_NUMBER,
    });
  };
};
