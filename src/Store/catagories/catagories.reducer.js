// reducers/categories.js

import {
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
} from "./catagories.types";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_LOADING:
      return { ...state, loading: true, error: false };

    case CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };

    case CATEGORIES_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default categoriesReducer;
