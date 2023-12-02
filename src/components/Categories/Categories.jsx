import React from "react";
import "./Categories.css";
function Categories() {
  return (
    <div className="Categories1">
      <div className="cat-card">
        <img
          src="https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop--1--1697613232.jpg"
          alt="New Arrivals"
        />
        <p>New Arrivals</p>
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/category-icon-for-msite-Desktop-1697613234.jpg"
          alt="Bestsellers"
        />
        <p>Bestsellers</p>
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg"
          alt="Winterwear"
        />
        <p>Winterwear</p>
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg"
          alt="Combos"
        />
        <p>Combos</p>
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-plus-size-common-1682570373.jpg"
          alt="Plus Size"
        />
        <p>Plus Size</p>
      </div>
    </div>
  );
}

export default Categories;
