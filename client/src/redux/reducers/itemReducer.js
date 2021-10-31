import { v4 as uuidv4 } from "uuid";
import { GET_ITEM, DELETE_ITEM,ADD_ITEM } from "../actions/types";
const initialState = {
  items: [
    {
      id: uuidv4(),
      name: "Eggs",
    },
    {
      id: uuidv4(),
      name: "Bread",
    },
    {
      id: uuidv4(),
      name: "Sugar",
    },
    {
      id: uuidv4(),
      name: "Milk",
    },
    {
      id: uuidv4(),
      name: "Tea",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
}
