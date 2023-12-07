import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../../Store/Product/product.actions";
import { fetchProducts } from "../../Store/Products/product.actions";
import "./dropdown.css";

const Colors = [
  { name: "CREAM" },
  { name: "ORANGE" },
  { name: "BLUE" },
  { name: "RED" },
  { name: "GREY" },
  { name: "GREEN" },
  { name: "BROWN" },
];

const Dropdown = ({ Sort }) => {
  const [open, isOpen] = useState(false);
  const [open1, isOpen1] = useState(false);
  const [open2, isOpen2] = useState(false);
  const [open3, isOpen3] = useState(false);
  const [open4, isOpen4] = useState(false);
  const [open5, isOpen5] = useState(false);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);

  const handleDrop = (value) => {
    if (value === 0) {
      isOpen(!open);
    } else if (value === 1) {
      isOpen1(!open1);
    } else if (value === 2) {
      isOpen2(!open2);
    } else if (value === 3) {
      isOpen3(!open3);
    } else if (value === 4) {
      isOpen4(!open4);
    } else if (value === 5) {
      isOpen5(!open5);
    }
  };

  const handleFilterAfterApiCall = () => {
    dispatch(
      fetchProducts(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products"
      )
    )
      .then(() => {
        // const { data } = products;

        // Filter products with prices more than 300 and less than 2000
        const filteredProducts = data.filter(
          (product) => product.price > 500 && product.price < 600
        );

        // Perform additional logic with the filtered products
        console.log("Filtered Products:", filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching and filtering products:", error);
      });
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(0)}>
          Color
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open ? (
          <div className="dropdown-content">
            {Colors.map((item) => (
              <div className="dropdown-item" key={item.name}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      dispatch(
                        fetchProducts(
                          `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=200&color=${item.name}`
                        )
                      );
                    }
                  }}
                />
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(4)}>
          Tags
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open4 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    handleFilterAfterApiCall();
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sellerTag=trending";
                    dispatch(fetchProducts(url));
                  }
                }}
              />
              Trending
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sellerTag=new arrival";
                    dispatch(fetchProducts(url));
                  }
                }}
              />
              New Arrival
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(5)}>
          Ratings
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open5 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                     let url =
                       "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?ratings=1.5&ratings=1.6&ratings=1.7&ratings=1.8&1.9";
                     dispatch(fetchProducts(url));
                  }
                }}
              />
              1-2
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                     let url =
                       "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?ratings=2&ratings=2.1&ratings=2.2&ratings=2.3&ratings=2.4&ratings=2.5&ratings=2.6&ratings=2.7&ratings=2.8&ratings=2.9";
                     dispatch(fetchProducts(url));
                  }
                }}
              />
              2-3
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                     let url =
                       "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?ratings=3&ratings=3.1&ratings=3.2&ratings=3.3&ratings=3.4&ratings=3.5&ratings=3.6&ratings=3.7&ratings=3.8&ratings=3.9";
                     dispatch(fetchProducts(url));
                  }
                }}
              />
              3-4
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                     let url =
                       "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100&ratings=4.1&ratings=4.2&ratings=4.3&ratings=4.4&ratings=4.5&ratings=4.6&ratings=4.7&ratings=4.8&ratings=4.9&ratings=5";
                     dispatch(fetchProducts(url));
                  }
                }}
              />
              4-5
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(2)}>
          Brand
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open2 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input type="checkbox" />
              Bewakoof
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(6)}>
          Price
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(7)}>
          Gender
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(8)}>
          Size
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(9)}>
          Feature
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(10)}>
          Fit
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(11)}>
          Material
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(12)}>
          Neck Style
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(13)}>
          Occasion
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(14)}>
          Price
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(15)}>
          Sale
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(16)}>
          Sleeve Length
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(17)}>
          Sports League
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn">
          Sports Team
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(3)}>
          Style
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
