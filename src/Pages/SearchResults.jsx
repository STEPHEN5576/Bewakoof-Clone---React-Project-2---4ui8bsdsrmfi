import styles from "../components/Mens/styles/card.module.css";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCategories } from "../Store/catagories/catagories.action";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../components/Mens/Dropdown";
import Card from "../components/Mens/Card";
import { Circles } from "react-loader-spinner";
import { fetchProducts } from "../Store/Products/product.actions";

const SearchResults = () => {
  const { inputValue } = useParams();
  const dispatch = useDispatch();
  // const { clothes, loading, error } = useSelector((state) => state.clothes);
  // const { data } = useSelector((state) => state.categories);
  const { data, loading, error } = useSelector((state) => state.product);
  // const { clothes, loading, error } = useSelector((state) => state.clothes);
const companys = [
  "BEWAKOOF X STREETWEAR",
  "TISTABENE",
  "CHIMPAAANZEE",
  "THE DAILY OUTFITS",
  "ANGEL FAB",
  "INDICLUB",
  "XYXX",
  "SAVVAO",
  "OFFICIAL DISNEY MERCHANDISE",
  "OFFICIAL NARUTO MERCHANDISE",
  "OFFICIAL GARFIELD MERCHANDISE",
  "OFFICIAL TOM %26 JERRY MERCHANDISE",
  "OFFICIAL MARVEL MERCHANDISE",
  "OFFICIAL STAR WARS MERCHANDISE",
  "OFFICIAL DC MERCHANDISE",
  "OFFICIAL NASA MERCHANDISE",
  "OFFICIAL MINIONS MERCHANDISE",
  "OFFICIAL HARRY POTTER MERCHANDISE",
  "OFFICIAL HOUSE OF THE DRAGON MERCHANDISE",
  "OFFICIAL LOONEY TUNES MERCHANDISE",
  "OFFICIAL CARTOON NETWORK MERCHANDISE",
  "OFFICIAL PEANUTS MERCHANDISE",
  "OFFICIAL COCA COLA MERCHANDISE",
  "OFFICIAL RICK AND MORTY MERCHANDISE",
];
  const sellertags = ["top rated", "trending", "best seller", "new arrival"];
  const catogories = [
    "hoodie",
    "jeans",
    "jogger",
    "jumpsuit",
    "kurta",
    "kurti",
    "pyjamas",
    "shirt",
    "shorts",
    "sweater",
    "tracksuit",
    "trouser",
    "tshirt",
  ];

  useEffect(() => {
    const lowerCasedInput1 = inputValue.toLowerCase();
    const UpperCasedInput = inputValue.toUpperCase().replace(/\s+/g, "");
    let url = "";
    let suburl = ``;
    console.log("UpperCasedInput:", UpperCasedInput);
    if (sellertags.includes(lowerCasedInput1)) {
      // If inputValue is in sellertags, only include sellerTag in the URL
      suburl = `sellerTag=${lowerCasedInput1}`;
      url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?${suburl}`;
    } else if (catogories.includes(lowerCasedInput1)) {
      // If inputValue is present, include subCategory in the URL
      suburl = `subCategory=${lowerCasedInput1}`;
      url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?${suburl}`;
    } else if (companys.includes(UpperCasedInput)) {
      // If inputValue is present, include subCategory in the URL
      suburl = `brand=${UpperCasedInput}`;
      url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?${suburl}`;
    } else {
      url =
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products";
    }
    console.log("URL:", url);
    dispatch(fetchProducts(url));
  }, [dispatch, inputValue]);

  // console.log("searchapi", data);

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

  const filteredSuggestions = data.filter((item) => {
    console.log("item", inputValue);
    const lowerCasedInput = inputValue.toLowerCase();
    const UpperCasedInput = inputValue.toUpperCase();

    return (
      item.name.toLowerCase().includes(lowerCasedInput) ||
      (item.color && item.color.toLowerCase().includes(lowerCasedInput)) ||
      (item.sellerTag &&
        item.sellerTag.toLowerCase().includes(lowerCasedInput)) ||
      (item.subCategory &&
        item.subCategory.toLowerCase().includes(lowerCasedInput)) ||
      (item.brand && item.brand.toUpperCase().includes(UpperCasedInput)) ||
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
