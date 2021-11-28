import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";
const initialState = {
  id: null,
  msg: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: action.payload.msg,
        id: action.payload.id,
        status: action.payload.status,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        msg: {},
        status: null,
      };
    default:
      return state;
  }
}
