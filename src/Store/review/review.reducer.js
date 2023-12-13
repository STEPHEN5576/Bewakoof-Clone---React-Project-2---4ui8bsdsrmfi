// review.reducer.js

import {
  ADD_REVIEW,
  GET_PRODUCT_REVIEWS,
  REVIEW_LOADING,
  REVIEW_ERROR,
} from "./review.types";

const initialState = {
  reviews: [],
  loading: false,
  error: false,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        loading: false,
        error: false,
      };
    case GET_PRODUCT_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        loading: false,
        error: false,
      };
    case REVIEW_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case REVIEW_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reviewReducer;
