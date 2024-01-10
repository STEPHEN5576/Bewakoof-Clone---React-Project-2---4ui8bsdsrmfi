import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles/Table.module.css";
import Modals from "../Payement/Model";
// import Modals from "../Payement/Modal";

const Table = () => {
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const { cart2 } = useSelector((state) => state.Cart);
  const { address } = useSelector((state) => state.states);
  console.log("address", address);

  const handleTotal = () => {
    setTotal(
      cart2.reduce(
        (acc, curr) => acc + Math.round(Number(curr.price)) * curr.qty,
        0
      )
    );
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleClick = () => {
    setShow(true);
  };
  useEffect(() => {
    handleTotal();
  }, [cart2]);

  if (cart2.some((item) => item.items.length === 0)) {
    return (
      <div className={styles.Empty}>
        <h3 style={{ textAlign: "center", marginTop: "30px" }}>
          No Items to show
        </h3>
      </div>
    );
  }

  return (
    <div>
      <Modals show={show} handleClose={handleClose} />
      <table className={styles.Table}>
        <thead>
          <tr>
            <td>PRICE SUMMARY</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {cart2.map((item) =>
            item.items.map((productItem) => (
              <tr key={productItem._id}>
                <td>{productItem.product.name}</td>
                <td>{productItem.product.price}</td>
              </tr>
            ))
          )}
          <tr>
            <td>Total MRP (Incl. of taxes) </td>
            {cart2.map((item) => (
              <td>{item.totalPrice}</td>
            ))}
          </tr>
          <tr>
            <td>Shipping Charges </td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>Bag Discount For More Than 3000 </td>
            <td>- ₹1420</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            {cart2.map((item) => (
              <td>
                {" "}
                {item.totalPrice > 3000
                  ? item.totalPrice - 1420
                  : item.totalPrice}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className={styles.Move}>
        <div>
          TOTAL RS.
          {cart2.map((item) => (
            <td>
              {" "}
              {item.totalPrice > 3000
                ? item.totalPrice - 1420
                : item.totalPrice}
            </td>
          ))}
        </div>
        <div>
          <button
            disabled={cart2.length === 0 ? true : false}
            onClick={handleClick}
            style={{ backgroundColor: cart2.length === 0 ? "grey" : "" }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
