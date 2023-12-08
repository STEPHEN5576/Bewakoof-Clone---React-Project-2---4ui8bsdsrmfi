import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Card.module.css";
import Card from "./Card";

const Allcards = () => {
  const { cart, cart2 } = useSelector((state) => state.Cart);
  const navigate = useNavigate();
  console.log("card2", cart2);

  if (cart2.length === 0) {
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
      {cart2.map((item) =>
        item.items.map((item) => <Card key={item._id} Item={item} />)
      )}
    </div>
  );
};

export default Allcards;
