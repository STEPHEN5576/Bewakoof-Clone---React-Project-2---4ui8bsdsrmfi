// actions/auth.js
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
} from "./auth.types";

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

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING:
      return { ...state, loading: true };

    case AUTH_SIGN_IN_SUCCESS:
      console.log("API Response", payload);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("Email", payload.data.email);

      return {
        ...state,
        loading: false,
        Alert: false,
        data: {
          name: payload.data.name, // Use the correct property name
          token: payload.token,
          isAuthenticated: true,
          email: payload.data.email,
        },
      };

    case AUTH_SIGN_IN_ERROR:
      return { ...state, error: true, loading: false, Alert: true };

    case AUTH_SIGN_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("Email");

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

export default authReducer;
