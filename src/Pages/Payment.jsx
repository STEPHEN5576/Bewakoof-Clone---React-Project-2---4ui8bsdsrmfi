import React, { useEffect } from "react";
import styles from "./styles/Pay.module.css";
import Navigator from "../components/Payement/Navigator";
import Card from "../components/Mens/Card";
import Table from "../components/Cart/Table";
import { useDispatch, useSelector } from "react-redux";
import { getCartApi } from "../Store/Card/Card.action";

const Payment = () => {
  const { cart2 } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartApi());
  }, []);
  console.log("payment", cart2.items);

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

          {cart2.map((cartItem) => {
            return cartItem.items.map((item) => {
              console.log("item", item.product);
              return <Card item={item.product} key={item._id} />;
            });
          })}
          <Table />
        </div>
      </div>
    </>
  );
};

export default Payment;
