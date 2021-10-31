import { GET_ITEM, DELETE_ITEM, ADD_ITEM } from "./types";

export const getItems = () => {
  return { type: GET_ITEM };
};

export const deleteItems = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
