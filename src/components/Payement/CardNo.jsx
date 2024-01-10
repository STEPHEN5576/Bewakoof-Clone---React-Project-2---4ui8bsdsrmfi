import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SuccessModal from "../Home/Login/Modal";
import styles from "./styles/nav.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitOrder } from "../../Store/State/action";

const CardNo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.states);
  const { cart2 } = useSelector((state) => state.Cart);
  console.log(cart2);
  const [formValues, setFormValues] = useState({
    name: "",
    card: "",
    cvv: "",
    date: "",
  });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const id = cart2[0]._id;
  // console.log("id", id);

  // const id = cart2.map((item) =>
  //   item.items.map((productItem) => productItem._id)
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const item of cart2) {
      for (const productItem of item.items) {
        console.log("id", productItem.product);
        const orderData = {
          productId: productItem.product._id,
          quantity: 1,
          address,
          // ...formValues,
        };

        // Dispatch the submitOrder action to make the API call
        await dispatch(submitOrder(orderData));
        setShow(true);
        console.log(formValues);
      }
    }

    // Now, all API calls have been made
    // Additional logic if needed
  };

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <div>
      <SuccessModal
        show={show}
        handleClose={handleClose}
        message={"Your Payment Was Successfully completed "}
      />
      <Form onSubmit={handleSubmit} className={styles.modelpayment}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Card Number"
            name="card"
            required
            onChange={handleChange}
          />
        </Form.Group>

        <div className={styles.flex}>
          <Form.Group className="mb-3">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Expiry Date"
              name="date"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cvv</Form.Label>
            <Form.Control
              type="password"
              placeholder="Cvv"
              name="cvv"
              required
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Name On Card</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name On Card"
            name="name"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Save card details for later"
            checked={true}
            readOnly
          />
        </Form.Group>
        <p>
          This transaction you make is totally secure. We don't save your CVV
          number.
        </p>
        <button type="submit" className={styles.btton}>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default CardNo;
