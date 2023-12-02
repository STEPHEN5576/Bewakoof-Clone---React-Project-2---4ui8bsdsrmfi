import config from "../../config";
import {
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
  PRODUCTS_ERROR,
} from "./product.types";

const { projectId } = config;

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_LOADING });

  try {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50",
      {
        headers: {
          projectId: projectId,
        },
      }
    );

    const data = await response.json();
    console.log("Data received:", data.data);

    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: data.data,
    });
    console.log("Data dispatched:", data.data);
  } catch (error) {
    dispatch({ type: PRODUCTS_ERROR });
  }
};
