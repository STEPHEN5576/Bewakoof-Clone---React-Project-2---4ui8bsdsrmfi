import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details/Details";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Store/catagories/catagories.action";
// import { fetchProducts } from "../Store/Products/product.actions";

import { Circles } from "react-loader-spinner";

const Product = () => {
  const params = useParams();
  const { _id } = params;
  const { data, loading, error } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`;
    dispatch(fetchCategories(url));
  }, []);
  console.log("data", data);
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
  return <div>{<Details item={data} />}</div>;
};

export default Product;
