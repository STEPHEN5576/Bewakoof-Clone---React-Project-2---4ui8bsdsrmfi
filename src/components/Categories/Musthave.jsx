import React from "react";
import "./Musthave.css";
import { Image } from "semantic-ui-react";
const images = [
  "https://images.bewakoof.com/uploads/grid/app/Sweaters-Men-desktop-mid-size-banner--3--1701356796.jpg",
  "https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-banner-FS-New--1--1701357152.jpg",
  "https://images.bewakoof.com/uploads/grid/app/desktop-midbanner-pj-u699-men-1701004463.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Jackets-Midsize-desktop-Men-banner-1701439390.jpg",
];

function Musthave() {
  const imagesChunks = chunkArray(images, 2);

  return (
    <div className="Musthave">
      <h1>TOO HOT TO BE MISSED</h1>
      <div className="musthaveImages">
        {imagesChunks.map((row, rowIndex) => (
          <div key={rowIndex} className="Musthaverow">
            {row.map((image, colIndex) => (
              <Image
                key={colIndex}
                draggable={false}
                style={{ width: "50%", height: "auto" }}
                src={image}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function chunkArray(array, size) {
  return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
    array.slice(i * size, i * size + size)
  );
}

export default Musthave;
