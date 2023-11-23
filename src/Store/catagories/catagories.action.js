// actions/categories.js
import config from "../../config";
// Import the config file
import {
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
} from "./categories.types";

const { projectId } = config; // Destructure the projectId from the config

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: CATEGORIES_LOADING });

  try {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",
      {
        headers: {
          projectId: projectId,
        },
      }
    );

    const data = await response.json();

    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CATEGORIES_ERROR });
  }
};
