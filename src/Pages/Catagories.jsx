import React from "react";
// import Navabar from "../components/Home/Navabar";
import Categories from "../components/Categories/Categories";
import Header from "../components/Categories/Header";
Header;
import styles from "./styles/Catagories.module.css";
import Banner from "../components/Categories/Banner";
import TrendingCat from "../components/Categories/TrendingCat";
import Musthave from "../components/Categories/Musthave";
function Catagories() {
  return (
    <div className={styles.mylist}>
      {/* <Navabar /> */}
      <Header />

      <Categories />
      <Banner />
      <TrendingCat />
      <Musthave />
    </div>
  );
}

export default Catagories;
