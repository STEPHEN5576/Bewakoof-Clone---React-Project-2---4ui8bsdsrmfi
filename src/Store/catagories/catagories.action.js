import config from "../../config";
import {
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
} from "./catagories.types"; // Fix the import path

const { projectId } = config;

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
    console.log("Data received:", data);

    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: data.data,
    });
    console.log("Data dispatched:", data);
  } catch (error) {
    dispatch({ type: CATEGORIES_ERROR });
  }
};
