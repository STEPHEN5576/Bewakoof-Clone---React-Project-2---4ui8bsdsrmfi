// ClothesActions.js
import config from "../../config";
import {
  FETCH_CLOTHES_REQUEST,
  FETCH_CLOTHES_SUCCESS,
  FETCH_CLOTHES_FAILURE,
} from "./Clothes.types"

const { projectId } = config;

// Action creators
export const fetchClothesRequest = () => ({
  type: FETCH_CLOTHES_REQUEST,
});

export const fetchClothesSuccess = (clothes) => ({
  type: FETCH_CLOTHES_SUCCESS,
  payload: clothes,
});

export const fetchClothesFailure = (error) => ({
  type: FETCH_CLOTHES_FAILURE,
  payload: error,
});

export const fetchClothes = (apiUrl) => async (dispatch) => {
  dispatch(fetchClothesRequest());

  try {
    const response = await fetch(apiUrl, {
      headers: {
        projectId: projectId,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data.data);

    dispatch(fetchClothesSuccess(data.data));
    console.log("Data dispatched:", data.data);
  } catch (error) {
    dispatch(fetchClothesFailure(error.message));
  }
};
