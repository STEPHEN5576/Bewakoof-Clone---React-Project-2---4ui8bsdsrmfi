import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Allcards from "../components/Cart/Allcards";
import Other2 from "../components/Cart/Other2";
import Others from "../components/Cart/Others";
import Table from "../components/Cart/Table";
import Tribe from "../components/Cart/Tribe";
import { Circles } from "react-loader-spinner";
import { getCartApi } from "../Store/Card/Card.action";
import styles from "./styles/Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { loading, error, cart2 } = useSelector((state) => state.Cart);

  useEffect(() => {
    dispatch(getCartApi());
  }, []);
  
  console.log(cart2);
  if (loading) {
    return (
      <div className={styles.Loader}>
        <Circles
          height="650"
          width="150"
          color="#f6d951"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.Loader}>
        <h2>Error...</h2>
      </div>
    );
  }
  if (
    !cart2 ||
    cart2.length === 0 ||
    cart2.some((item) => !item || !item.items || item.items.length === 0)
  ) {
    return (
      <div className={styles.Container}>
        <div className={styles.single}>
          <Others />
          <Other2 />
          <div className={styles.Empty}>
            <h3 style={{ textAlign: "center", marginTop: "30px" }}>
              Your Cart is Empty !
            </h3>
            <button onClick={() => navigate("/categories")}>Add Items</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.single}>
          <Others />
          <Other2 />
          <Allcards />
        </div>
        <div className={styles.double}>
          <Tribe />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Cart;
