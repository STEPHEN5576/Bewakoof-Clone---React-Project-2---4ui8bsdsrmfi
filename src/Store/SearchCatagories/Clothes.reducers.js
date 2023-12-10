// clothesReducer.js
import {
  FETCH_CLOTHES_REQUEST,
  FETCH_CLOTHES_SUCCESS,
  FETCH_CLOTHES_FAILURE,
} from "./Clothes.types";

const initialState = {
  clothes: [],
  loading: false,
  error: null,
};

const clothesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLOTHES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CLOTHES_SUCCESS:
      return {
        ...state,
        loading: false,
        clothes: action.payload,
        error: null,
      };
    case FETCH_CLOTHES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default clothesReducer;
