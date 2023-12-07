import axios from "axios";
import config from "../../config";
const { projectId } = config;
import {
  ADD_TO_CART,
  GET_CART_Items,
  CHANGE_CART_QTY,
  REMOVE_FROM_CART,
  CART_LOADING,
  CART_ERROR,
} from "./Card.types";

const token = localStorage.getItem("token");

export const getCartApi = () => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });
  try {
    let r = await axios.get(
      "https://academics.newtonschool.co/api/v1/ecommerce/cart/",
      {
        headers: {
          Authorization: token,
          projectId: projectId,
        },
      }
    );
    dispatch({
      type: GET_CART_Items,
      payload: r.data,
    });
  } catch (e) {
    dispatch({
      type: CART_ERROR,
    });
  }
};

export const AddtoCartApi =
  ({ item_id, size, quantity }) =>
  async (dispatch) => {
    dispatch({
      type: CART_LOADING,
    });

    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${item_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            projectID: projectId,
          },
          body: JSON.stringify({
            quantity: quantity,
            size: size,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();

      dispatch({
        type: ADD_TO_CART,
        payload: data.item,
      });
    } catch (error) {
      dispatch({
        type: CART_ERROR,
      });
    }
  };

export const deleteCartApi = (productID) => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });

  try {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: projectId,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete item from cart");
    }

    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  } catch (error) {
    dispatch({
      type: CART_ERROR,
    });
  }
};

export const changeCart = (productID, quantity) => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });

  try {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          projectID: projectId,
        },
        body: JSON.stringify({
          qty: quantity,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to change item quantity in cart");
    }

    const data = await response.json();

    dispatch({
      type: CHANGE_CART_QTY,
      payload: data.item,
    });
  } catch (error) {
    dispatch({
      type: CART_ERROR,
    });
  }
};
