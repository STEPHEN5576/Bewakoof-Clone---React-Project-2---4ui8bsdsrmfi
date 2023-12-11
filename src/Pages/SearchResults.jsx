import styles from "../components/Mens/styles/card.module.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCategories } from "../Store/catagories/catagories.action";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../components/Mens/Dropdown";
import Card from "../components/Mens/Card";
import { Circles } from "react-loader-spinner";

const SearchResults = () => {
  const { inputValue } = useParams();
  const dispatch = useDispatch();
  const { clothes, loading, error } = useSelector((state) => state.clothes);

  useEffect(() => {
    // Fetch categories when the component mounts
    dispatch(
      fetchCategories(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products"
      )
    );
  }, [dispatch]);

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

  const filteredSuggestions = clothes.filter((item) => {
    const lowerCasedInput = inputValue.toLowerCase();

    return (
      item.name.toLowerCase().includes(lowerCasedInput) ||
      (item.color && item.color.toLowerCase().includes(lowerCasedInput)) ||
      (item.sellerTag &&
        item.sellerTag.toLowerCase().includes(lowerCasedInput)) ||
      (item.subCategory &&
        item.subCategory.toLowerCase().includes(lowerCasedInput))
    );
  });

  return (
    <div>
      <h2 className={styles.Results}>Search Results for: {inputValue}</h2>

      {filteredSuggestions.length === 0 ? (
        <h3>No match found</h3>
      ) : (
        <div className={styles.Box}>
          <div className={styles.Drops}>
            <Dropdown />
          </div>
          <div className={styles.container}>
            {filteredSuggestions.map((item) => (
              <Card item={item} key={item._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
