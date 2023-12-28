import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="Categories1">
      <div className="cat-card">
        <Link to={"/search/new arrival"}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop--1--1697613232.jpg"
            alt="New Arrivals"
          />
        </Link>
        <p>New Arrivals</p>
      </div>
      <div>
        <Link to={"/search/best seller"}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-icon-for-msite-Desktop-1697613234.jpg"
            alt="Bestsellers"
          />
        </Link>

        <p>Bestsellers</p>
      </div>
      <div>
        <Link to={"/search/hoodie"}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg"
            alt="Winterwear"
          />
        </Link>
        <p>Winterwear</p>
      </div>
      <div>
        <Link to={"/search/Combos"}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg"
            alt="Combos"
          />
        </Link>
        <p>Combos</p>
      </div>
      <div>
        <Link to={"/search/XXL"}>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-plus-size-common-1682570373.jpg"
            alt="Plus Size"
          />
        </Link>
        <p>Plus Size</p>
      </div>
    </div>
  );
}

export default Categories;
