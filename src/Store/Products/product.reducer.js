import {
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
  PRODUCTS_ERROR,
} from "./product.types";

const initialState = {
  loading: false,
  data: [],
  error: false,
  data2: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return { ...state, loading: true, error: false };

    case PRODUCTS_SUCCESS:
     console.log("Reducer Data received:", action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
        data2: action.payload,
      };

    case PRODUCTS_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default productReducer;
