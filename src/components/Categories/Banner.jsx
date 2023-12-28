import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="Banner">
      <img
        src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-men--12--1701147449.jpg"
        alt="Mens"
        onClick={() => handleNavigate("/Mens")}
      />

      <img
        src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-women--12--1701147449.jpg"
        alt="Womens"
        onClick={() => handleNavigate("/womens")}
      />
    </div>
  );
}

export default Banner;
