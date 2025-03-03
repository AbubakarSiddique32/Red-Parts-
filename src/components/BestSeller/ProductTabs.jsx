import React, { useState, useEffect } from "react";
import "./ProductTabs.css"; // Ensure correct styling
import image1 from "../ProductsUI/product-7.jpg";
import image2 from "../ProductsUI/product-5.jpg";
import image3 from "../ProductsUI/product-3.jpg";
import image4 from "../ProductsUI/product-2.jpg";

const productsData = {
  featured: [
    {
      id: 1,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$12",
      image: image1,
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
    },
    {
      id: 2,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$24",
      image: image2,
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
    },
    {
      id: 3,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$12",
      image: image3,
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
    },
    {
      id: 4,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$12",
      image: image4,
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
    },
  ],
  bestSellers: [
    {
      id: 5,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$34",
      image: image2,
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
    },
    {
      id: 6,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$10",
      image: image1,
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
    },
  ],
  popular: [
    {
      id: 7,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$40",
      image: image2,
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
    },
    {
      id: 8,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$22",
      image: image4,
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
    },
  ],
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const [columns, setColumns] = useState(3); // Default: 3 products per row

  // Function to update number of columns based on screen width
  const updateColumns = () => {
    if (window.innerWidth <= 650) {
      setColumns(1); // Mobile: 1 product per row
    } else if (window.innerWidth <= 900) {
      setColumns(2); // Tablet: 2 products per row
    } else if (window.innerWidth <= 1100) {
      setColumns(3); // Tablet: 3 products per row
    } else {
      setColumns(4); // Desktop: 4 products per row
    }
  };

  // Listen for window resize to adjust columns dynamically
  useEffect(() => {
    updateColumns(); // Set columns on initial load
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div className="product-tabs">
      {/* Tab Buttons */}
      <div className="tabs">
        {Object.keys(productsData).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab?.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <div
        className="product-list"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {productsData[activeTab].map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4 className="sku">SKU: {product.sku}</h4>
            <h3 className="name">{product.name}</h3>
            <div className="reviews">
              <ul>
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-star"></i>
                  </li>
                ))}
              </ul>
              <h5>{product.reviews}</h5>
            </div>
            <div className="price">
              <p>{product.price}</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
