// Card.action.js
import config from "../../config";
const { projectId } = config;

import * as types from "./types"; // Update with your actual path to types.js

export const setAddress = (addressData) => ({
  type: types.SET_ADDRESS,
  payload: addressData,
});

export const submitOrderSuccess = (orderId) => {
  return {
    type: types.SUBMIT_ORDER_SUCCESS,
    payload: orderId,
  };
};

export const submitOrderFailure = (error) => {
  return {
    type: types.SUBMIT_ORDER_FAILURE,
    payload: error,
  };
};

export const submitOrder = (orderData) => {
  return (dispatch) => {
    fetch("https://academics.newtonschool.co/api/v1/ecommerce/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        projectId: projectId,
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the API call is successful
        if (data.success) {
          const orderId = data;
          // const orderId = data.orderId;
          console.log("first", orderId);
          dispatch(submitOrderSuccess(orderId));
        } else {
          // Handle API response with errors
          const error = data.error || "Unknown error";
          dispatch(submitOrderFailure(error));
        }
      })
      .catch((error) => {
        // Handle errors during the API call
        dispatch(submitOrderFailure("Network error"));
      });
  };
};

export const getOrderSuccess = (orders) => {
  console.log("myorders", orders);

  return {
    type: types.GET_ORDER_SUCCESS,
    payload: orders,
  };
};

export const getOrderFailure = (error) => ({
  type: types.GET_ORDER_FAILURE,
  payload: error,
});

export const getOrder = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/order",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectId: projectId,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("API Response:", data);

      const orders = data.data; // Assuming the orders are in the response
      console.log("orders action", orders);
      dispatch(getOrderSuccess(orders));
    } catch (error) {
      console.error("API Error:", error);
      dispatch(getOrderFailure("Network error", error.message));
    }
  };
};
