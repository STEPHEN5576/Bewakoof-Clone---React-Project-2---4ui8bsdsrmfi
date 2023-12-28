// components/Categories/Header.js
// import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/Products/product.actions";
import LoaderFn from "../loader/Loader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Header.css"; // Import your CSS file for styling
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

function Header(props) {
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 3;
  // const navigate = Navigate();

  useEffect(() => {
    const apiUrl =
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50";
    dispatch(fetchProducts(apiUrl));
  }, [dispatch]);

  const { loading, data, error } = useSelector((state) => state.product);

  console.log("My Data", data);

  // const totalPages = Math.ceil(data.length / itemsPerPage);

  // const handlePrevPage = () => {
  //   setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
  // };

  // const handleNextPage = () => {
  //   setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
  // };

  // const getVisibleItems = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   return data.slice(startIndex, endIndex);
  // };

  return (
    <Carousel
      // itemClass="image-item"
      responsive={responsive}
      // deviceType="desktop"
      swipeable={false}
      showDots={true}
      slidesToSlide={3}
      infinite={true}
      autoPlay={{ isEnabled: props.deviceType !== "mobile", delay: 1000 }}
      autoPlaySpeed={1000}
      customTransition="all .2"
      transitionDuration={2000}
      dotListClass="custom-dot-list-style"
    >
      {data.map((image) => {
        // {
        //   console.log("images", image);
        // }
        // const handleNavigate = () => {
        //   navigate("/Product" + "/" + image._id);
        // };
        return (
          <Link to={"/Product" + "/" + image._id}>
            <Image
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
              }}
              src={image.displayImage}
              className="image"
              // onClick={handleNavigate}
            />
          </Link>
        );
      })}

      {/* {data.map((item) => {
        {
          console.log("Images", item?.displayImage);
        }
        <Image
          draggable={false}
          style={{ width: "100%", height: "100%" }}
          src={item?.displayImage}
          // alt={item.name}
        />;
      })} */}
    </Carousel>
  );
}
export default Header;
