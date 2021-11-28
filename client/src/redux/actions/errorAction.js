import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

export const returnErrors = (msg, status, id = null) => {
  console.log("return Error", id);
  return {
    type: GET_ERRORS,
    payload: {
      msg,
      status,
      id,
    },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
