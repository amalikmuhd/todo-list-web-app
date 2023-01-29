import { CREATE_LIST } from "../types";

const initialState = {
  readList: [],
};

const todoReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_LIST: {
      return {
        ...state,
        readList: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default todoReducers;
