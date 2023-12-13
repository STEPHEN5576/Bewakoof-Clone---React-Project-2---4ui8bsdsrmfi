// review.actions.js
import config from "../../config";
const { projectId } = config;

import {
  ADD_REVIEW,
  GET_PRODUCT_REVIEWS,
  REVIEW_LOADING,
  REVIEW_ERROR,
} from "./review.types";

// Action Creators

export const addReviewApi = (productId, rating, text) => async (dispatch) => {
  dispatch({
    type: REVIEW_LOADING,
  });

  try {
    // Make an API request to add a review
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/review/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          projectId: projectId,
        },
        body: JSON.stringify({
          productId,
          ratings: rating,
          text: text,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add review");
    }

    const data = await response.json();

    dispatch({
      type: ADD_REVIEW,
      payload: data.data,
    });
  } catch (error) {
    console.error("Error in addReviewApi:", error.message);
    dispatch({
      type: REVIEW_ERROR,
    });
  }
};

export const getProductReviewsApi = (productId) => async (dispatch) => {
  dispatch({
    type: REVIEW_LOADING,
  });

  try {
    // Make an API request to get product reviews
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/review/${productId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          projectId: projectId,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get product reviews");
    }

    const data = await response.json();
    console.log("reviews action", data);
    dispatch({
      type: GET_PRODUCT_REVIEWS,
      payload: data.data,
    });
  } catch (error) {
    console.error("Error in getProductReviewsApi:", error.message);
    dispatch({
      type: REVIEW_ERROR,
    });
  }
};
