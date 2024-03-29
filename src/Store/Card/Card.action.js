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
console.log("token", token);
export const getCartApi = () => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });

  // if (`Bearer ${localStorage.getItem("token")}` || !projectId) {
  //   // Handle the case where token or projectId is missing
  //   console.error("Token or projectId is missing");
  //   dispatch({
  //     type: CART_ERROR,
  //   });
  //   return;
  // }

  try {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/cart/",
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
    console.log("cart array", data);
    dispatch({
      type: GET_CART_Items,
      payload: data.data,
    });
  } catch (e) {
    console.error("Error in getCartApi:", e.message);
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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectId: projectId,
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
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          projectId: projectId,
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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          projectId: projectId,
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
