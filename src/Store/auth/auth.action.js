// actions/auth.js
import config from "../../config";
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
} from "./auth.types";
import { useNavigate } from "react-router-dom";

const { projectId } = config;

export const loginAPI = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });

  try {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: projectId,
        },
        body: JSON.stringify({
          email: creds.email,
          password: creds.password,
          appType: "ecommerce",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Login API Error:", data.message);
      dispatch({ type: AUTH_SIGN_IN_ERROR, error: data.message });
    } else {
      dispatch({
        type: AUTH_SIGN_IN_SUCCESS,
        payload: data,
      });
      const navigate = useNavigate();
      navigate("/");
    }

    return data.message;
  } catch (error) {
    console.error("Error in Login API call:", error);
    dispatch({ type: AUTH_SIGN_IN_ERROR, error: "An error occurred." });
  }
};

export const signupAPI = (user) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });

  try {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: projectId,
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          appType: "ecommerce",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Signup API Error:", data.message);
      dispatch({ type: AUTH_SIGN_IN_ERROR, error: data.message });
    } else {
      dispatch({
        type: AUTH_SIGN_IN_SUCCESS,
        payload: data,
      });

      // Check if it's a signup (not a login), then navigate
      const navigate = useNavigate();
      navigate("/login");
    }

    return data.message;
  } catch (error) {
    console.error("Error in Signup API call:", error);
    dispatch({ type: AUTH_SIGN_IN_ERROR, error: "An error occurred." });
  }
};

export const forgotPasswordAPI = (user) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });

  try {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/forgotPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: projectId,
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          appType: "ecommerce",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Forgot Password API Error:", data.message);
      dispatch({ type: AUTH_SIGN_IN_ERROR, error: data.message });
    } else {
      dispatch({
        type: AUTH_SIGN_IN_SUCCESS,
        payload: data,
      });
    }

    return data.message;
  } catch (error) {
    console.error("Error in Forgot Password API call:", error);
    dispatch({ type: AUTH_SIGN_IN_ERROR, error: "An error occurred." });
  }
};

export const signOut = () => {
  return {
    type: AUTH_SIGN_OUT,
  };
};
