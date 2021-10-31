import { GET_ITEM, DELETE_ITEM, ADD_ITEM, SET_LOADING } from "./types";
import axios from "axios";
// import { dispatch } from "react-redux";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then((res) => {
    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  });
};

export const deleteItems = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => (dispatch) => {
  axios.post("/api/items", item).then((res) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  });

  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const setItemsLoading = () => {
  return {
    type: SET_LOADING,
  };
};
