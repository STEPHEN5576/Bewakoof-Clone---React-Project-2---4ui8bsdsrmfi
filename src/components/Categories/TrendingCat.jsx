import React from "react";
import { Image } from "semantic-ui-react";
import "./TrendingCat.css";
const images = [
  "https://images.bewakoof.com/uploads/grid/app/category-box-printed-tees-m-1684997505.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-men-combos-1684308339.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box--m-pyjama-1685086220.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-jeans-1686063035.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-co-ords-m-1681815598.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg",
];
function TrendingCat() {
  const imagesChunks = chunkArray(images, 6);

  return (
    <div className="TrendingCat">
      <h1>TRENDING CATEGORIES</h1>
      <div className="TrendingCatImage">
        {imagesChunks.map((row, rowIndex) => (
          <div key={rowIndex} className="TrendingCatRow">
            {row.map((image, colIndex) => (
              <Image
                key={colIndex}
                draggable={false}
                style={{ width: "16.6%", height: "100%" }}
                src={image}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to chunk the array into arrays of a specific size
function chunkArray(array, size) {
  return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
    array.slice(i * size, i * size + size)
  );
}

export default TrendingCat;
