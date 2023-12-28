import React, { useEffect, useState } from "react";
import styles from "./styles/div.module.css";
import { BsHeart, BsBagCheck, BsHeartFill } from "react-icons/bs";
import Accordions from "./Accordion";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { AddtoCartApi, deleteCartApi } from "../../Store/Card/Card.action";
import {
  getProductReviewsApi,
  addReviewApi,
} from "../../Store/review/review.actions";
import {
  getWishlistApi,
  addToWishlistApi,
  removeFromWishlistApi,
} from "../../Store/wishlist/wishlist.action";
import { useDispatch, useSelector } from "react-redux";

const Sizes = ["S", "M", "L", "XL", "XXL", "3XL"];

const Details = ({ item }) => {
  const [number, setNumber] = useState(0);
  const { cart2 } = useSelector((state) => state.Cart);
  const { reviews, loading, error } = useSelector((state) => state.review);
  // console.log("reviews", reviews);
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);
  console.log("stars", selectedStars);

  useEffect(() => {
    // Fetch reviews when the component mounts
    if (item && item._id) {
      dispatch(getProductReviewsApi(item._id));
    }
  }, [dispatch, item]);

  const [added, setAdded] = useState(false);
  const [added2, setAdded2] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const [color, setColor] = useState();
  const [selected, setSelect] = useState(false);
  const [buttonindex, setButtonIndex] = useState();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    console.log("Current cart2 state:", cart2);
    let isMounted = true;

    if (item && item._id && isMounted && cart2) {
      let check = cart2.some((d) => d && d._id === item._id);
      setAdded(check);
    }

    return () => {
      isMounted = false;
    };
  }, [item, cart2]); // Include dependencies in the dependency array

  // console.log("details", item.images);
  // console.log("details id", item._id);
  useEffect(() => {
    // Check if the item is in the wishlist
    let isMounted = true;
    if (item && item._id && isMounted && wishlist) {
      let check = wishlist.some((d) => d && d._id === item._id);
      setAdded(check);
    }

    return () => {
      isMounted = false;
    };
  }, [item, wishlist]);

  const handleWishlistClick = () => {
    if (added2) {
      // If the item is already in the wishlist, remove it
      setAdded2(false);
      // Dispatch an action to remove the item from the wishlist
      // (Implement this action in your wishlist actions file)
      dispatch(removeFromWishlistApi(item._id));
    } else {
      // If the item is not in the wishlist, add it
      setAdded2(true);
      // Dispatch an action to add the item to the wishlist
      // (Implement this action in your wishlist actions file)
      dispatch(addToWishlistApi(item._id));
    }
    dispatch(getWishlistApi());
  };

  // const handleRatingChange = (event) => {
  //   setSelectedRating(parseInt(event.target.value, 10));
  // };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handlePostReview = () => {
    // Dispatch an action to add the review
    dispatch(addReviewApi(item._id, selectedStars, reviewText));

    // Clear the input fields after posting the review
    setSelectedStars(0);
    // setSelectedRating(0);
    setReviewText("");
  };

  const handleStarClick = (starValue) => {
    // Toggle the selected star value
    setSelectedStars((prevStars) => (prevStars === starValue ? 0 : starValue));
  };

  const renderStarIcons = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <StarIcon
            key={index}
            className={`${styles.StarIcon} ${styles.SelectedStar}`}
          />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <StarBorderIcon key={index} className={styles.StarIcon} />
        ))}
      </>
    );
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.One}>
          {item.images &&
            item.images.map((source, index) => (
              <div key={index}>
                <img src={source} alt="" onClick={() => setNumber(index)} />
              </div>
            ))}
        </div>

        <div className={styles.Two}>
          {item.images && item.images.length > 0 ? (
            <img src={item.images[number]} alt="Not Available" />
          ) : (
            <p>No Image Available</p>
          )}
        </div>

        <div className={styles.Three}>
          <h6>Bewakoof</h6>
          <p>{item.name}</p>
          <div className={styles.Rate}>
            <p>
              {item.ratings}
              <span style={{ color: "gold", fontSize: "20px" }}>★</span>
            </p>
          </div>
          <div className={styles.Price}>
            <p>₹{item.price}</p>
            {/* <p>₹{item.actualPrice}</p>
            <p>{item.off} OFF</p> */}
          </div>
          <p className={styles.Taxes}>Inclusive of all taxes</p>
          <div className={styles.Tribe}>
            <p>
              TriBe members get an extra discount of ₹30 and FREE shipping.
              <span>Learn more</span>
            </p>
          </div>
          <div>
            <div className={styles.Flex}>
              <p>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div className={styles.Sizes}>
              {Sizes.map((size, index) => (
                <div key={index}>
                  <button
                    style={{
                      backgroundColor:
                        selected && buttonindex === index ? color : "none",
                    }}
                    onClick={() => {
                      setSelect(true);
                      setColor("blue");
                      setButtonIndex(index);
                    }}
                  >
                    {size}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.Btns}>
            {added ? (
              <button
                onClick={() => {
                  setAdded(false);
                  dispatch(deleteCartApi(item._id));
                }}
                style={{ backgroundColor: "red", color: "white" }}
              >
                <BsBagCheck
                  style={{ fontWeight: "Bolder", fontSize: "18px" }}
                />
                Remove Item
              </button>
            ) : (
              <button
                onClick={() => {
                  setAdded(true);
                  dispatch(
                    AddtoCartApi({
                      item_id: item._id,
                      size: Sizes[buttonindex],
                      quantity: 1,
                    })
                  );
                }}
                disabled={isAuthenticated ? false : true}
              >
                Add to cart
                <BsBagCheck
                  style={{ fontWeight: "Bolder", fontSize: "18px" }}
                />
              </button>
            )}
            <button className={styles.Wishlist} onClick={handleWishlistClick}>
              {added2 ? <BsHeartFill /> : <BsHeart />}
              WISHLIST
            </button>
          </div>

          <div className={styles.Flex1}>
            <div>
              <h1>Reviews</h1>
              {loading && <p>Loading reviews...</p>}
              {error && <p>Error loading reviews</p>}
              {reviews && reviews.length > 0 ? (
                <div>
                  {reviews.map((review) => (
                    <div key={review._id} className={styles.reviwed}>
                      <p>{review.text}</p>
                      {/* <p>Ratings: {review.ratings}</p> */}
                      <div>{renderStarIcons(review.ratings)}</div>
                      <hr />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No reviews available</p>
              )}
            </div>
            {isAuthenticated ? (
              <div className={styles.postreview}>
                <h2>Your Review</h2>
                <div className={styles.StarRating}>
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <label key={starValue}>
                      {selectedStars >= starValue ? (
                        <StarIcon
                          onClick={() => handleStarClick(starValue)}
                          className={`${styles.StarIcon} ${styles.SelectedStar}`}
                        />
                      ) : (
                        <StarBorderIcon
                          onClick={() => handleStarClick(starValue)}
                          className={styles.StarIcon}
                        />
                      )}
                    </label>
                  ))}
                </div>
                <textarea
                  value={reviewText}
                  onChange={handleReviewTextChange}
                  placeholder="Write your review..."
                ></textarea>
                <button onClick={handlePostReview}>Post Review</button>
              </div>
            ) : (
              <p>
                Please{" "}
                <span onClick={() => navigate.push("/login")}>login</span> to
                post a review.
              </p>
            )}
            {/* <Accordions label={"SAVE EXTRA WITH 3 OFFERS"} />
            <Accordions label={"PRODUCT DESCRIPTION"} />
            <Accordions label={"15 DAY RETURNS & EXCHANGE"} /> */}
          </div>
        </div>
        <div></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Details;
