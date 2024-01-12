import React, { useEffect } from "react";
import { getOrder } from "../../Store/State/action";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Cart/styles/Card.module.css";

function OrdersCard() {
  const dispatch = useDispatch();
  const { orderId } = useSelector((state) => state.states);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  const handleDelete = () => {
    // Implement your delete logic here
  };
  console.log(orderId);

  return (
    <div>
      {console.log("Rendering OrdersCard")}

      {orderId ? (
        orderId.map((order) => (
          <div key={order.order._id} className={styles.Cont}>
            <div className={styles.container}>
              {order.order.items.map((item) => (
                <div key={item.product._id} className={styles.One}>
                  <p className={styles.title}>{item.product.name}</p>

                  <div className={styles.Price}>
                    <p>Item Price ₹{item.product.price}</p>
                    {/* <p>Selected Size: {item.size}</p> */}
                  </div>
                </div>
              ))}
              <div className={styles.One}>
                <h5>Order Id #{order.order._id.slice(-4)}</h5>
                {/* <p className={styles.title}>{"hi"}</p> */}
                <div className={styles.em}>
                  <h6>Delivery Address</h6>
                  <p>
                    {order.order.shipmentDetails.address.street} ,
                    {order.order.shipmentDetails.address.city} ,
                    {order.order.shipmentDetails.address.state} ,
                    {order.order.shipmentDetails.address.zipCode}.
                  </p>
                </div>
                {/* <p>Selected Size: {item.size}</p> */}
              </div>

              <div className={styles.Two}>
                {order.order.items.length > 0 && (
                  <img src={order.order.items[0].product.displayImage} alt="" />
                )}
              </div>
            </div>

            {/* <div className={styles.Options}>
              <button onClick={handleDelete}>REMOVE</button>
              <button>MOVE TO WISHLIST</button>
            </div> */}
          </div>
        ))
      ) : (
        <p>No orders available</p>
      )}
    </div>
  );
}

export default OrdersCard;
