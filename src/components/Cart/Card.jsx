import React from "react";
import { useDispatch } from "react-redux";
import { changeCart, deleteCartApi,getCartApi } from "../../Store/Card/Card.action";
import styles from "./styles/Card.module.css";

const Card = ({ Item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCartApi(Item.product._id));
    dispatch(getCartApi());
    // dispatch()
    // const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log("existingCart", existingCart);

    // const updatedCart = existingCart.filter(
    //   (cartItem) => cartItem.product._id !== Item.product._id
    // );
    // localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // const handleChange = (e) => {
  //   dispatch(changeCart(Item._id, Number(e.target.value)));
  // };
  console.log(Item.product._id);
  return (
    <div className={styles.Cont}>
      <div className={styles.container}>
        <div className={styles.One}>
          <p className={styles.title}>{Item.product.name}</p>

          <div className={styles.Price}>
            <p>₹{Item.product.price}</p>
            <p>Selected Size : {Item.size}</p>
            {/* <p>₹{Item.actualPrice.toString()}</p> */}
          </div>

          {/* <p className={styles.green}>
            You Saved ₹ {Number(Item.actualPrice) - Number(Item.price)}
          </p> */}

          <div className={styles.Select}>
            <select name="Sizes" id="">
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">2XL</option>
              <option value="">3XL</option>
            </select>
            <select
              // value={Item.qty.toString()}
              name=""
              id=""
              // onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className={styles.Two}>
          <img src={Item.product.displayImage} alt="" />
        </div>
      </div>
      <div className={styles.Options}>
        <button onClick={handleDelete}>REMOVE</button>
        <button>MOVE TO WISHLIST</button>
      </div>
    </div>
  );
};

export default Card;
