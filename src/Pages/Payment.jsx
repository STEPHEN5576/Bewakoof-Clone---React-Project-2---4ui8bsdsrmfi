import React from "react";
import styles from "./styles/Pay.module.css";
import Navigator from "../components/Payement/Navigator";
import Card from "../components/Mens/Card";
import Table from "../components/Cart/Table";
import { useSelector } from "react-redux";

const Payment = () => {
  const { cart2 } = useSelector((state) => state.Cart);
  
  return (
    <>
      <div className={styles.container}>
        <div>
          <h5 className={styles.Heading}>Choose your payment method</h5>
          <Navigator />
        </div>
        <div>
          <div className={styles.Header}>
            <h6 className={styles.Heading}>Items You are paying for</h6>
          </div>

          {cart2.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          <Table />
        </div>
      </div>
     
    </>
  );
};

export default Payment;
