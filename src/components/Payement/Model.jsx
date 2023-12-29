import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Address from "./Address";
import styles from "./styles/Add.module.css";


function Modals({ show, handleClose }) {
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className={styles.modaltitle}>
            Add Your Address
          </Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <Address handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;
