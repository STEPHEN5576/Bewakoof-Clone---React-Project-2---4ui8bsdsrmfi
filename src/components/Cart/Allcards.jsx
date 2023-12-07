import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Card.module.css";
import Card from "./components/Cart/Card";

const Allcards = () => {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className={styles.Empty}>
        <h3 style={{ textAlign: "center", marginTop: "30px" }}>
          Your Cart is Empty !
        </h3>
        <button onClick={() => navigate("/categories")}>Add Items</button>
      </div>
    );
  }
  return (
    <div>
      {cart.map((item, index) => (
        <Card key={index} Item={item} />
      ))}
    </div>
  );
};

export default Allcards;
