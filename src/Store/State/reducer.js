// Card.reducer.js

import * as types from "./types"; // Update with your actual path to types.js

const initialState = {
  address: {
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  },
  orderId: [],
  orders: [],
  error: false,
  error1: false,
};

// console.log(orders);

const StateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case types.SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        orderId: action.payload,
        error: false,
      };
    case types.SUBMIT_ORDER_FAILURE:
      return {
        ...state,
        orderId: null,
        error: action.payload,
      };
    case types.GET_ORDER_SUCCESS:
      console.log("Payload received:", action.payload);
      return {
        ...state,
        orders: action.payload,
        error1: null,
      };
    case types.GET_ORDER_FAILURE:
      return {
        ...state,
        orders: [],
        error1: action.payload,
      };
    default:
      return state;
  }
};

export default StateReducer;
