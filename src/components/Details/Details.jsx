import React, { useEffect, useState } from "react";
import styles from "./styles/div.module.css";
import { BsHeart, BsBagCheck } from "react-icons/bs";
import Accordions from "./Accordion";
import { AddtoCartApi, deleteCartApi } from "../../Store/Card/Card.action";
import { useDispatch, useSelector } from "react-redux";

const Sizes = ["S", "M", "L", "XL", "XXL", "3XL"];

const Details = ({ item }) => {
  const [number, setNumber] = useState(0);
  const { cart2 } = useSelector((state) => state.Cart);

  const [added, setAdded] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const [color, setColor] = useState();
  const [selected, setSelect] = useState(false);
  const [buttonindex, setButtonIndex] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Current cart2 state:", cart2);
    let isMounted = true;

    if (item && item._id && isMounted && cart2) {
      let check = cart2.some((d) => d && d._id === item._id);
      setAdded(check);
    }

    return () => {
      isMounted = false;
    };
  }, [item, cart2]); // Include dependencies in the dependency array

  console.log("details", item.images);
  console.log("details id", item._id);

  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.One}>
          {item.images &&
            item.images.map((source, index) => (
              <div key={index}>
                <img src={source} alt="" onClick={() => setNumber(index)} />
              </div>
            ))}
        </div>

        <div className={styles.Two}>
          {item.images && item.images.length > 0 ? (
            <img src={item.images[number]} alt="Not Available" />
          ) : (
            <p>No Image Available</p>
          )}
        </div>

        <div className={styles.Three}>
          <h6>Bewakoof</h6>
          <p>{item.name}</p>
          <div className={styles.Rate}>
            <p>
              {item.ratings}
              <span style={{ color: "gold", fontSize: "20px" }}>★</span>
            </p>
          </div>
          <div className={styles.Price}>
            <p>₹{item.price}</p>
            {/* <p>₹{item.actualPrice}</p>
            <p>{item.off} OFF</p> */}
          </div>
          <p className={styles.Taxes}>Inclusive of all taxes</p>
          <div className={styles.Tribe}>
            <p>
              TriBe members get an extra discount of ₹30 and FREE shipping.
              <span>Learn more</span>
            </p>
          </div>
          <div>
            <div className={styles.Flex}>
              <p>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div className={styles.Sizes}>
              {Sizes.map((size, index) => (
                <div key={index}>
                  <button
                    style={{
                      backgroundColor:
                        selected && buttonindex === index ? color : "none",
                    }}
                    onClick={() => {
                      setSelect(true);
                      setColor("blue");
                      setButtonIndex(index);
                    }}
                  >
                    {size}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.Btns}>
            {added ? (
              <button
                onClick={() => {
                  setAdded(false);
                  dispatch(deleteCartApi(item._id));
                }}
                style={{ backgroundColor: "red", color: "white" }}
              >
                <BsBagCheck
                  style={{ fontWeight: "Bolder", fontSize: "18px" }}
                />
                Remove Item
              </button>
            ) : (
              <button
                onClick={() => {
                  setAdded(true);
                  dispatch(
                    AddtoCartApi({
                      item_id: item._id,
                      size: Sizes[buttonindex],
                      quantity: 1,
                    })
                  );
                }}
                disabled={isAuthenticated ? false : true}
              >
                Add to cart
                <BsBagCheck
                  style={{ fontWeight: "Bolder", fontSize: "18px" }}
                />
              </button>
            )}
            <button className={styles.Wishlist}>
              <BsHeart />
              WISHLIST
            </button>
          </div>

          <div>
            <Accordions label={"SAVE EXTRA WITH 3 OFFERS"} />
            <Accordions label={"PRODUCT DESCRIPTION"} />
            <Accordions label={"15 DAY RETURNS & EXCHANGE"} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Details;
