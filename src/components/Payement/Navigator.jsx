import React from "react";
import {
  AiFillCreditCard,
  AiFillWallet,
  AiFillDollarCircle,
  AiFillIdcard,
} from "react-icons/ai";
import { GiCroissantsPupil } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import CardNo from "./CardNo";
import styles from "./styles/nav.module.css";
import { useNavigate } from "react-router";

const Navigator = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Box}>
      <div className={styles.container}>
        <div>
          <AiFillCreditCard />
          Credit Card/DebitCard
        </div>
        <div onClick={() => navigate("/comingsoon")}>
          <AiFillWallet />
          Wallet
        </div>
        <div onClick={() => navigate("/comingsoon")}>
          <GiCroissantsPupil />
          UPI
        </div>
        <div onClick={() => navigate("/comingsoon")}>
          <RiBuilding2Fill />
          Net bankingx
        </div>
        <div onClick={() => navigate("/comingsoon")}>
          <AiFillDollarCircle />
          Cash On Deliveryx
        </div>
        <div onClick={() => navigate("/comingsoon")}>
          <AiFillIdcard />
          Buy Now Pay Laterx
        </div>
      </div>
      <div className={styles.container2}>
        <CardNo />
      </div>
    </div>
  );
};

export default Navigator;
