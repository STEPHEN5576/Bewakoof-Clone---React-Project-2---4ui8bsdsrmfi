import React, { useState } from "react";
import styles from "./Payement/styles/Add.module.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Password({ handleClose }) {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdatePassword = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectID: "f104bi07c490",
          },
          body: JSON.stringify({
            name: "test6969",
            email: "test6969@gmail.com",
            passwordCurrent: currentPassword,
            password: newPassword,
            appType: "ott",
          }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        // Password updated successfully
        console.log("Password updated successfully");
        handleClose();
        // Navigate to the home page
      } else {
        setError(
          data.message || "An error occurred while updating the password"
        );
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      setError("An error occurred while updating the password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className={styles.Container}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Current Password"
              required
              name="current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>New Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              required
              name="new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>

          <hr />

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
              name="confirm password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </Form.Group>

          <div className={styles.opt}>
            <button type="button" onClick={handleUpdatePassword}>
              Continue
            </button>
            <button onClick={handleClose}>Cancel</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Password;
