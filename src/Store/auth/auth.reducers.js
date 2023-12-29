// actions/auth.js
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  AUTH_LOGIN_IN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGN_UP_SUCCESS,
} from "./auth.types";
import { useNavigate } from "react-router-dom";

const initialState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
    email: "",
    name: "", // Add the name property
  },
  error: false,
  Alert: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING:
    case AUTH_LOGIN_IN_LOADING:
      return { ...state, loading: true };

    case AUTH_SIGN_IN_SUCCESS:
      console.log("API Response for Sign In", payload);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("Email", payload.data.email);
      localStorage.setItem("name", payload.data.name);
      return {
        ...state,
        loading: false,
        Alert: false,
        data: {
          name: payload.data.name,
          token: payload.token,
          isAuthenticated: true,
          email: payload.data.email,
        },
      };

    case AUTH_LOGIN_SUCCESS:
      console.log("API Response for Login", payload);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("Email", payload.data.email);
      localStorage.setItem("name", payload.data.name);
      return {
        ...state,
        loading: false,
        Alert: false,
        data: {
          name: payload.data.name,
          token: payload.token,
          isAuthenticated: true,
          email: payload.data.email,
        },
      };

    case AUTH_SIGN_UP_SUCCESS:
      console.log("API Response for Sign Up", payload);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("Email", payload.data.email);
      localStorage.setItem("name", payload.data.name);
      return {
        ...state,
        loading: false,
        Alert: false,
        data: {
          name: payload.data.name,
          token: payload.token,
          isAuthenticated: false, // Set to false for sign up
          email: payload.data.email,
        },
      };

    case AUTH_SIGN_IN_ERROR:
      return { ...state, error: true, loading: false, Alert: true };

    case AUTH_SIGN_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("Email");
      localStorage.removeItem("name");
      return {
        ...state,
        data: {
          isAuthenticated: false,
          token: "",
          name: "",
          email: "",
        },
      };

    default:
      return state;
  }
};
