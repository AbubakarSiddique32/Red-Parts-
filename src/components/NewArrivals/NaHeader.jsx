import { useState } from "react";
import "./NaHeader.css";
const NaHeader = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { key: "all", label: "All" },
    { key: "wheel", label: "Wheel Covers" },
    { key: "timing", label: "Timing Belts" },
    { key: "oil", label: "Oil Plans" },
  ];

  return (
    <div className="na-header">
      <div className="nah-heading">
        <h2>New Arrivals</h2>
      </div>
      <div className="nah-buttons">
        {categories.map((category) => (
          <button
            id="category-button"
            key={category.key}
            className={selectedCategory === category.key ? "active-btn" : ""}
            onClick={() => setSelectedCategory(category.key)} // Update selected category
          >
            {category.label}
          </button>
        ))}

        <div className="nav-buttons">
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
  );
};

export default NaHeader;
