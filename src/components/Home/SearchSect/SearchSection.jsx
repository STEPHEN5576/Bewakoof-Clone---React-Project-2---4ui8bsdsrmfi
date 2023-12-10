import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../Store/Products/product.actions";

function SearchSection({ val }) {
  const { data2, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const url =
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products";
    dispatch(fetchProducts(url));
  }, [dispatch]);
  console.log("data2", data2);
  return <div></div>;
}

export default SearchSection;
