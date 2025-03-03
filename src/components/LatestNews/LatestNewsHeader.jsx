import React from "react";
import "./LatestNewsHeader.css";

const LatestNewsHeader = ({ chooseCategory, setChooseCategory }) => {
  const categories = [
    { key: "all", label: "All" },
    { key: "special", label: "Special Offers" },
    { key: "new", label: "New Arrivals" },
    { key: "reviews", label: "Reviews" },
  ];
  return (
    <div className="lnh">
      <div className="lnh-heading">
        <h2>Latest News</h2>
      </div>
      <div className="lnh-links">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`category-btn1 ${
              chooseCategory === category.key ? "active" : ""
            }`}
            onClick={() => setChooseCategory(category.key)}
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

export default LatestNewsHeader;
