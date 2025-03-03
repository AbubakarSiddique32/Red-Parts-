import { useState } from "react";
import "../FeaturedProducts/FeaturedProducts.css";
import ProductSlider from "./ProductSlider";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Power Tools", "Hand Tools", "Plumbing"];

  return (
    <div className="featured-products">
      <div className="fp-header">
        <h1>Featured Products</h1>

        <div className="fph-categories">
          {categories.map((category) => (
            <button
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

          <div className="nav-buttons" id="nav-buttons">
            <button className="nav-btn" aria-label="Previous">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="nav-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="nav-btn" aria-label="Next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="nav-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ProductSlider />
    </div>
  );
};

export default FeaturedProducts;
