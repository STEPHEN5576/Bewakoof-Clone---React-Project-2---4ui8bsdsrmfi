import React from "react";
import styles from "./styles/Others.module.css";
import { Link } from "react-router-dom";

const Other2 = () => {
  return (
    <div className={styles.Offer}>
      <div className={styles.One}>
        <li className={styles.bold}>Buy 3 For 899 offer available</li>
        <li>Add 2 more item to avail this offer</li>
      </div>
      <div className={styles.bold2}>
        <Link to="/">Add Items</Link>
      </div>
    </div>
  );
};

export default Other2;
