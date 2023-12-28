// wishlist.reducer.js

import {
  WISHLIST_LOADING,
  GET_WISHLIST_ITEMS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  REMOVE_ALL_FROM_WISHLIST,
  WISHLIST_ERROR,
} from "./wishlist.types";

const initialState = {
  addedwishlist: [],
  wishlist: [],
  loading: false,
  error: null,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_WISHLIST_ITEMS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        wishlist: action.payload,
        loading: false,
        error: null,
      };

    case ADD_TO_WISHLIST:
      console.log("action.payload", action.payload);
      return {
        ...state,
        addedwishlist: [...state.wishlist, action.payload],
        loading: false,
        error: null,
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== action.payload),
        loading: false,
        error: null,
      };

    case REMOVE_ALL_FROM_WISHLIST:
      return {
        ...state,
        wishlist: [],
        loading: false,
        error: null,
      };

    case WISHLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: "Error occurred while processing wishlist actions.",
      };

    default:
      return state;
  }
};

export default wishlistReducer;
