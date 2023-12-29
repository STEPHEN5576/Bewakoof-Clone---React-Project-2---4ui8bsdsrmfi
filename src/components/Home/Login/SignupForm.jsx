import React, { useState } from "react";
import styles from "./styles/form.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { signupAPI } from "../../../Store/auth/auth.action";
import { useNavigate } from "react-router";
const SignupForm = () => {
  const [form, setForm] = useState({
    name: "", // Add name field
    email: "",
    password: "",
    confirmPassword: "",
  });
const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add additional validation logic if needed

    // Dispatch the signup action
    dispatch(signupAPI(form, { isLogin: false }));
    navigate("/");
  };

  return (
    <div>
      <div className={styles.Header}>
        <h3>Sign Up</h3>
        <h5>for Latest trends, exciting offers and everything Bewakoof!</h5>
      </div>
      <div className={styles.Form}>
        <Form onSubmit={handleSubmit} className={styles.main}>
          <Form.Group className={styles.group} controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className={styles.inputform}
              onChange={handleChange}
              name="name"
              required
            />
          </Form.Group>

          <Form.Group className={styles.group} controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={styles.inputform}
              onChange={handleChange}
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className={styles.group} controlId="formBasicPassword">
            <Form.Control
              className={styles.inputform}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              required
            />
          </Form.Group>

          <Form.Group
            className={styles.group}
            controlId="formBasicConfirmPassword"
          >
            <Form.Control
              className={styles.inputform}
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              name="confirmPassword"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className={styles.Button}
            style={{ backgroundColor: "#47a5a9" }}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
