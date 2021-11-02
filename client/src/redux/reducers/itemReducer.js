 
import { GET_ITEM, DELETE_ITEM, ADD_ITEM, SET_LOADING } from "../actions/types";
const initialState = {
  items: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM:
      console.log("GET_ITEM");

      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
