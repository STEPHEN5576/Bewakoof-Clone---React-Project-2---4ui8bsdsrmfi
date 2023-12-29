import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Address from "./Address";
// import styles from "./styles/Add.module.css";
import styles from "./Payement/styles/Add.module.css";
import Password from "./Password";

const Model2 = ({ show, handleClose }) => {
  const storedFirstName = localStorage.getItem("name") || "";
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            className={styles.modaltitle}
          >
            Change your Password
            <br />
            <h6>{storedFirstName}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Password handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Model2;
