import React from "react";
import "./Brands.css";

import brand1 from "../ProductsUI/Brands/brand-1.png";
import brand2 from "../ProductsUI/Brands/brand-2.png";
import brand3 from "../ProductsUI/Brands/brand-3.png";
import brand4 from "../ProductsUI/Brands/brand-4.png";
import brand5 from "../ProductsUI/Brands/brand-5.png";
import brand6 from "../ProductsUI/Brands/brand-6.png";
import brand7 from "../ProductsUI/Brands/brand-7.png";
import brand8 from "../ProductsUI/Brands/brand-10.png";
import brand9 from "../ProductsUI/Brands/brand-11.png";
import brand10 from "../ProductsUI/Brands/brand-12.png";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands-body">
        <div className="brand-image">
          <img src={brand1} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand2} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand3} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand4} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand5} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand6} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand7} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand8} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand9} alt="" />
        </div>
        <div className="brand-image">
          <img src={brand10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
