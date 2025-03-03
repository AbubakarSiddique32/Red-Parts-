import React from "react";
import "./Shop.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import BestSeller from "../BestSeller/BestSeller";

const Shop = () => {
  return (
    <div className="shop">
      <h1>SHOP NOW</h1>
      <FeaturedProducts />
      <BestSeller />
    </div>
  );
};

export default Shop;
