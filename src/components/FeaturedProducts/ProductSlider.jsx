import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import "./ProductSlider.css"; // Import the CSS file
import image1 from "../ProductsUI/product1.jpg";
import image2 from "../ProductsUI/product-2.jpg";
import image3 from "../ProductsUI/product-3.jpg";
import image4 from "../ProductsUI/product4.jpg";
import image5 from "../ProductsUI/product-5.jpg";
import image7 from "../ProductsUI/product-7.jpg";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4 items per row

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$10",
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
      image: image1,
      sale: true,
    },
    {
      id: 2,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$34",
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
      image: image2,
      sale: false,
    },
    {
      id: 3,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$24",
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
      image: image3,
      sale: false,
    },
    {
      id: 4,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$12",
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
      image: image4,
      sale: false,
    },
    {
      id: 5,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$12",
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
      image: image5,
      sale: false,
    },
    {
      id: 6,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$12",
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
      image: image2,
      sale: false,
    },
    {
      id: 7,
      name: "Brandix Brake Kit BDX-7507370-S",
      price: "$12",
      reviews: "4 on 3 reviews",
      sku: "753-3875-12",
      image: image7,
      sale: false,
    },
  ];

  // Function to dynamically update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 600) {
        setItemsPerPage(3); // Show 1 item per row on small screens
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2); // Show 2 items per row on medium screens
      } else if (window.innerWidth <= 900) {
        setItemsPerPage(3); // Show 3 items per row on tablets
      } else {
        setItemsPerPage(4); // Default: 4 items per row on large screens
      }
    };

    updateItemsPerPage(); // Initial check
    window.addEventListener("resize", updateItemsPerPage); // Listen for window resize

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-track">
        {products
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((product) => (
            <div className="st-ul" key={product.id}>
              <ProductList
                productId={product.id}
                sku={product.sku}
                name={product.name}
                reviews={product.reviews}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductSlider;
