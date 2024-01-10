import React, { useState } from "react";
import styles from "./styles/Add.module.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setAddress } from "../../Store/State/action";
import { useDispatch } from "react-redux";

const Address = ({ handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    country: "India",
    fullName: "", // Updated field name
    mobile: "",
    zipCode: "", // Updated field name
    city: "",
    state: "",
    street: "", // Updated field name
    areaLocality: "", // Updated field name
    landmark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { street, city, state, country, zipCode } = formValues;
    const addressData = { street, city, state, country, zipCode };

    // Dispatch the setAddress action with the extracted addressData
    dispatch(setAddress(addressData));
    console.log("form", formValues);
    navigate("/payment");
  };

  return (
    <div>
      <div className={styles.Container}>
        <Form onSubmit={handleSubmit}>
          <div className={styles.Select}>
            <Form.Label>Select Your Country</Form.Label>
            <select
              name="country"
              id=""
              value={formValues.country}
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <hr />

          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Full Name"
              required
              name="fullName" // Updated field name
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Mobile Number"
              required
              name="mobile"
              onChange={handleChange}
            />
          </Form.Group>

          <hr />
          <Form.Group className="mb-3">
            <Form.Label>Pin code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pin code"
              required
              name="zipCode" // Updated field name
              onChange={handleChange}
            />
          </Form.Group>
          <div className={styles.flex}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                required
                name="city"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                required
                name="state"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Flat no./Building, Street name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Flat no./Building, Street name"
              required
              name="street" // Updated field name
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Area/Locality</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area/Locality"
              required
              name="areaLocality" // Updated field name
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Landmark (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Landmark (Optional)"
              name="landmark"
              onChange={handleChange}
            />
          </Form.Group>

          <div className={styles.opt}>
            <button type="submit">Continue</button>
            <button onClick={handleClose}>Cancel</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Address;
