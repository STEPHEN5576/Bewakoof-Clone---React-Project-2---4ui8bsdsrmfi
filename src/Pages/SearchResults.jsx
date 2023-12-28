import styles from "../components/Mens/styles/card.module.css";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100"
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
    // console.log("item", item);
    const lowerCasedInput = inputValue.toLowerCase();

    return (
      item.name.toLowerCase().includes(lowerCasedInput) ||
      (item.color && item.color.toLowerCase().includes(lowerCasedInput)) ||
      (item.sellerTag &&
        item.sellerTag.toLowerCase().includes(lowerCasedInput)) ||
      (item.subCategory &&
        item.subCategory.toLowerCase().includes(lowerCasedInput)) ||
      (Array.isArray(item.size) &&
        item.size.some(
          (size) =>
            typeof size === "string" &&
            size.toLowerCase().includes(lowerCasedInput)
        ))
    );
  });

  return (
    <div>
      <h2 className={styles.Results}>Search Results for: {inputValue}</h2>

      {filteredSuggestions.length === 0 ? (
        <div className={styles.resultscontent}>
          <img
            src="https://www.bewakoof.com/assets/images/no-search.png"
            alt="We couldn't find any matches"
          />
          <h3>We couldn't find any matches</h3>
          <div>
            <h4>Maybe you’ll find it in one of these categories:</h4>
            <div className={styles.resultCatogories}>
              <Link to={"/Mens"}>
                <h5>Men</h5>
              </Link>
              <div className={styles.resultcontent}>
                <Link to={"/search/shirt"}>
                  <h5>shirt</h5>
                </Link>
                <Link to={"/search/top rated"}>
                  <h5>top rated</h5>
                </Link>
              </div>
              <div className={styles.resultcontent}>
                <Link to={"/search/joggers"}>
                  <h5>Bottom wear</h5>
                </Link>
                <Link to={"/search/new arrival"}>
                  <h5>New Arrival</h5>
                </Link>
              </div>
            </div>
            <div className={styles.resultCatogories}>
              <Link to={"/womens"}>
                <h5>Womens</h5>
              </Link>
              <div className={styles.resultcontent}>
                <Link to={"/search/shirt"}>
                  <h5>Shirt</h5>
                </Link>
                <Link to={"/search/trending"}>
                  <h5>Trending</h5>
                </Link>
              </div>
              <div className={styles.resultcontent}>
                <Link to={"/search/joggers"}>
                  <h5>Bottom wear</h5>
                </Link>
                <Link to={"/search/new arrival"}>
                  <h5>New Arrival</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
