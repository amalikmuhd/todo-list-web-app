import { CREATE_LIST, EDIT_LIST, REMOVE_LIST, UPDATE_LIST } from "../types";

export const createlistAction = (list) => (dispatch) => {
  dispatch({ type: CREATE_LIST, payload: list });
};

export const UPDATE_LIST_ACTION = (list) => (dispatch) => {
  dispatch({ type: UPDATE_LIST, payload: list });
};

export const REMOVE_LIST_ACTION = (list) => (dispatch) => {
  dispatch({ type: REMOVE_LIST, payload: list });
};

export const EDIT_LIST_ACTION = (list) => (dispatch) => {
  dispatch({ type: EDIT_LIST, payload: list });
};
