import React, { useState, useEffect } from "react";
import styles from "./styles/form.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginAPI } from "../../../Store/auth/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
// import SuccessModal from "./Modal";
import SuccessModal4 from "./ModalLogin";

const LoginForm = ({ onSignupClick }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, token } = useSelector((state) => state.auth.data);
  const [show, setshow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    dispatch(loginAPI(form, { isLogin: true }));
    setSubmitted(true);
    console.log(isAuthenticated);
  };
  useEffect(() => {
    if (submitted) {
      // Add a delay of 500 milliseconds (adjust as needed)
      const delay = 1000;

      // Using setTimeout to wait for the updated isAuthenticated value
      const timeoutId = setTimeout(() => {
        if (!isAuthenticated) {
          setshow(true);
        }
      }, delay);

      // Cleanup function to clear the timeout in case the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [submitted, isAuthenticated]);

  const handleClose = () => {
    setshow(false);
    setSubmitted(false);
  };

  return (
    <div>
      <SuccessModal4
        show={show}
        handleClose={handleClose}
        message={"Incorrect Details Entered Please try again."}
      />
      <div className={styles.Header}>
        <h3>Log in / Sign up</h3>
        <h5>for Latest trends, exciting offers and everything Bewakoof!</h5>
      </div>
      <div className={styles.Form}>
        <Form onSubmit={handleSubmit} className={styles.main}>
          <Form.Group controlId="formBasicEmail" className={styles.group}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={styles.inputform}
              onChange={handleChange}
              name="email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className={styles.group}>
            <Form.Control
              className={styles.inputform}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className={styles.Button}
            style={{ backgroundColor: "#47a5a9" }}
          >
            Continue
          </Button>
        </Form>
        <div className={styles.Or}>
          <div>
            <hr />
          </div>
          <div>OR</div>
          <div>
            <hr />
          </div>
        </div>
        <button className={styles.authButton}>
          <AiOutlineMail />
          Continue With Email
        </button>
        <div className={styles.auth}>
          <button>
            <FcGoogle />
            Google
          </button>
          <button>
            <BsFacebook />
            Facebook
          </button>
        </div>
        <div>
          <p className={styles.Foot}>
            By creating an account or logging in, you agree with Bewakoof's
            <span>Terms and Conditions</span>
            and <span>Privacy Policy.</span>
          </p>
        </div>
        <div>
          <p className={styles.SignupLink} onClick={onSignupClick}>
            Don't have an account? Sign up here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
