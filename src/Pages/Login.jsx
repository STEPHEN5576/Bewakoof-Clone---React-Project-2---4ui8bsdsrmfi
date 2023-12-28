import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gradient from "../components/Home/Login/Gradient";
import LoginForm from "../components/Home/Login/LoginForm";
import SignupForm from "../components/Home/Login/SignupForm"; // Import the SignupForm component

import styles from "./styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const [formType, setFormType] = useState("login"); // Manage the form type in the state

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      // Redirect to login page if signup
      navigate("/login");
    }
  }, [isAuthenticated]);

  const handleFormTypeChange = () => {
    // Toggle between login and signup forms
    setFormType((prevType) => (prevType === "login" ? "signup" : "login"));
  };

  return (
    <div className={styles.Login}>
      <Gradient />
      {formType === "login" ? (
        <LoginForm onSignupClick={handleFormTypeChange} />
      ) : (
        <SignupForm onLoginClick={handleFormTypeChange} />
      )}
    </div>
  );
};

export default Login;
