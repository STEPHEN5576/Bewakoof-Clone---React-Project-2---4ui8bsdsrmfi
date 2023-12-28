import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistApi } from "../Store/wishlist/wishlist.action";
import Card from "../components/Mens/Card";
import styles from "./styles/Wishlist.module.css";
function WishList() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { wishlist, loading, error } = useSelector((state) => state.wishlist);
  console.log("wish", wishlist);

useEffect(() => {
  const fetchData = async () => {
    try {
      await dispatch(getWishlistApi());
      // Your code...
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  fetchData();
}, [dispatch]);

  return (
    <div className={styles.main}>
      <h1>Wishlist</h1>
      {loading && <p>Loading wishlist...</p>}
      {error && <p>Error loading wishlist</p>}
      {wishlist && wishlist.length > 0 ? (
        <div className={styles.container}>
          {wishlist.map((item) => (
            <Card key={item.products._id} item={item.products} />
          ))}
        </div>
      ) : (
        <p>No items in the wishlist</p>
      )}
    </div>
  );
}

export default WishList;
