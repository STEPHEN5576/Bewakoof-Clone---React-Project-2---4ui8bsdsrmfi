import React from "react";
import { useEffect } from "react";
import Card from "../components/Mens/Card";
import Dropdown from "../components/Mens/Dropdown";
import styles from "../components/Mens/styles/card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/Products/product.actions";
// import Banner from "../Components/Mens/Banner";
import { Circles } from "react-loader-spinner";

const Womens = () => {
  const { data, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const url =
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Women&limit=50";
    dispatch(fetchProducts(url));
  }, [dispatch]);
  console.log("Mens", data);
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <div>
      {/* <Banner
        src={
          "https://images.bewakoof.com/uploads/category/desktop/INSIDE-BANNER_DESKTOP_FREEBIE-1667395627.jpg"
        }
      /> */}

      <div className={styles.Box}>
        <div className={styles.Drops}>
        <Dropdown />
        </div>
        <div className={styles.container}>
          {data.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womens;
