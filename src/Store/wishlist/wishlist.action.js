// wishlist.actions.js
import config from "../../config";
const { projectId } = config;

import {
  WISHLIST_LOADING,
  GET_WISHLIST_ITEMS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  REMOVE_ALL_FROM_WISHLIST,
  WISHLIST_ERROR,
} from "./wishlist.types";

const token = localStorage.getItem("token");

export const getWishlistApi = () => async (dispatch) => {
  dispatch({
    type: WISHLIST_LOADING,
  });

  try {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/wishlist/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          projectID: projectId,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("get Wishlist data", data.data.items);

    dispatch({
      type: GET_WISHLIST_ITEMS,
      payload: data.data.items,
    });
  } catch (e) {
    console.error("Error in getWishlistApi:", e.message);
    dispatch({
      type: WISHLIST_ERROR,
    });
  }
};

export const addToWishlistApi = (productId) => async (dispatch) => {
  dispatch({
    type: WISHLIST_LOADING,
  });

  try {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          projectID: projectId,
        },
        body: JSON.stringify({
          productId: productId,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add item to wishlist");
    }

    const data = await response.json();

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: data.item,
    });
  } catch (error) {
    console.error("Error in addToWishlistApi:", error.message);
    dispatch({
      type: WISHLIST_ERROR,
    });
  }
};

export const removeFromWishlistApi = (productId) => async (dispatch) => {
  dispatch({
    type: WISHLIST_LOADING,
  });

  try {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          projectID: projectId,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to remove item from wishlist");
    }

    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: productId,
    });
  } catch (error) {
    console.error("Error in removeFromWishlistApi:", error.message);
    dispatch({
      type: WISHLIST_ERROR,
    });
  }
};

export const removeAllFromWishlistApi = () => async (dispatch) => {
  dispatch({
    type: WISHLIST_LOADING,
  });

  try {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/wishlist/",
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: projectId,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to remove all items from wishlist");
    }

    dispatch({
      type: REMOVE_ALL_FROM_WISHLIST,
    });
  } catch (error) {
    console.error("Error in removeAllFromWishlistApi:", error.message);
    dispatch({
      type: WISHLIST_ERROR,
    });
  }
};
