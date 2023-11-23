import React, { useState } from "react";
import styles from "./styles/form.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { signupAPI } from "../../../Store/auth/auth.action";

const SignupForm = () => {
  const [form, setForm] = useState({
    name: "", // Add name field
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    dispatch(signupAPI(form));
  };

  return (
    <div>
      <div className={styles.Header}>
        <h3>Sign Up</h3>
        <h5>for Latest trends, exciting offers and everything Bewakoof!</h5>
      </div>
      <div className={styles.Form}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className="p-3"
              onChange={handleChange}
              name="name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="p-3"
              onChange={handleChange}
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              className="p-3"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
            <Form.Control
              className="p-3"
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
