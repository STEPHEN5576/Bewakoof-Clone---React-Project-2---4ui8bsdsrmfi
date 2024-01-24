import React, { useState } from "react";
import Footer2 from "./Footer2";
import styles from "./styles/Footer.module.css";
// import scrn from "../../Assets/scr.png";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import { BsApple, BsSnapchat, BsCash } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const [submit, handleSubmit] = useState(false);
  const handleLinks = (link) => {
    navigate(link);
  };
  const handleBewakoofLinks = (link) => {
    window.location.href = link;
  };
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div>
          <ul>
            <li>CUSTOMER SERVICE</li>
            <li
              onClick={() => {
                window.location.href =
                  "https://www.bewakoof.com/contact-us/order-delivery-payment";
              }}
            >
              Contact Us
            </li>
            <li onClick={() => handleLinks("/comingsoon")}>Track Order</li>
            <li onClick={() => handleLinks("/comingsoon")}>Return Order</li>
            <li onClick={() => handleLinks("/comingsoon")}>Cancel Order</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>COMPANY</li>
            <li
              onClick={() =>
                handleBewakoofLinks(
                  "/https://www.bewakoof.com/about-us/our-story"
                )
              }
            >
              About Us
            </li>
            <li
              onClick={() =>
                handleBewakoofLinks("https://www.bewakoof.com/careers")
              }
            >
              We're Hiring
            </li>
            <li
              onClick={() =>
                handleBewakoofLinks(
                  "https://www.bewakoof.com/terms-and-conditions"
                )
              }
            >
              Terms & Conditions
            </li>
            <li
              onClick={() =>
                handleBewakoofLinks(
                  "https://www.bewakoof.com/contact-us/order-delivery-payment"
                )
              }
            >
              Privacy Policy
            </li>
            <li
              onClick={() =>
                handleBewakoofLinks("https://www.bewakoof.com/blog/")
              }
            >
              Blog
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>CONNECT WITH US</li>
            <li
              onClick={() =>
                handleBewakoofLinks("https://www.facebook.com/bewakoofco")
              }
            >
              <RiFacebookBoxLine
                style={{ fontSize: "25px", marginRight: "3px" }}
              />
              4.7M People Like this
            </li>
            <li
              onClick={() =>
                handleBewakoofLinks(
                  "https://www.instagram.com/bewakoofofficial/"
                )
              }
            >
              {" "}
              <RiInstagramLine
                style={{ fontSize: "25px", marginRight: "3px" }}
              />
              1M Followers
            </li>
            <div className={styles.flex3}>
              <FiTwitter
                onClick={() =>
                  handleBewakoofLinks("https://twitter.com/bewakoof")
                }
                style={{ fontSize: "19px", marginRight: "3px", color: "white" }}
              />
              <ImPinterest2
                onClick={() =>
                  handleBewakoofLinks("https://www.pinterest.com/bewakoof/")
                }
                style={{ fontSize: "19px", marginRight: "3px", color: "white" }}
              />
              <BsSnapchat
                onClick={() =>
                  handleBewakoofLinks(
                    "https://www.snapchat.com/add/bewakoof_tv"
                  )
                }
                style={{ fontSize: "19px", marginRight: "3px", color: "white" }}
              />
              <BsApple
                onClick={() =>
                  handleBewakoofLinks(
                    "https://apps.apple.com/in/app/bewakoof-fashion-shopping-app/id1100190514"
                  )
                }
                style={{ fontSize: "19px", marginRight: "3px", color: "white" }}
              />
            </div>
          </ul>
        </div>
        <div className={styles.Formm}>
          <ul>
            <li>KEEP UP TO DATE</li>
            <div className={styles.form}>
              <input
                type="text"
                className={styles.input}
                placeholder={"Enter Your Email"}
              />
              <button
                className={styles.btn}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(true);
                  setTimeout(() => {
                    handleSubmit(false);
                  }, 10000);
                }}
              >
                Subsribe
              </button>
            </div>
            <div style={{ color: "yellow" }}>
              {submit ? "User Subscribed" : ""}
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.container2}>
        <div>
          <p>
            {" "}
            <GiReturnArrow style={{ fontSize: "18px", marginRight: "20px" }} />
            15 Days return policy*
          </p>
          <p>
            <BsCash style={{ fontSize: "18px", marginRight: "20px" }} /> Cash on
            delivery*
          </p>
        </div>
        <div className={styles.Playstore}>
          <li>DOWNLOAD THE APP</li>
          <div className={styles.flex}>
            <img
              src="https://images.bewakoof.com/web/app_android_v1.png"
              alt=""
              onClick={() =>
                handleBewakoofLinks(
                  "https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                )
              }
            />
            <img
              src="https://images.bewakoof.com/web/app_ios_v1.png"
              alt=""
              onClick={() =>
                handleBewakoofLinks(
                  "https://apps.apple.com/in/app/bewakoof-fashion-shopping-app/id1100190514"
                )
              }
            />
          </div>
        </div>
        <div className={styles.Links}>
          <li
            style={{ color: "#fdd835", fontSize: "16px", marginBottom: "10px" }}
          >
            100% SECURE PAYMENT
          </li>
          {/* <img src={scrn} alt="" /> */}
        </div>
        <div className={styles.Noneee}></div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Footer;
