import "./NaBody.css";
import NaBodyItem from "./NaBodyItem";
import NaHeader from "./NaHeader";
import image1 from "../ProductsUI/product-2.jpg";
import image2 from "../ProductsUI/product-5.jpg";
import image3 from "../ProductsUI/product-7.jpg";
import image4 from "../ProductsUI/product-3.jpg";
import { useState } from "react";

const NaBody = () => {
  const Datas = {
    all: [
      {
        id: 1,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image1,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 2,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image2,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 3,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image3,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 4,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image4,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
    ],
    wheel: [
      {
        id: 5,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image2,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 6,
        name: "Brandix Spark Plug Kit ASR-600",
        image: image2,
        reviews: "5 on 5 reviews",
        price: "$25",
      },
      {
        id: 7,
        name: "Brandix Spark Plug Kit ASR-700",
        image: image2,
        reviews: "5 on 5 reviews",
        price: "$30",
      },
      {
        id: 8,
        name: "Brandix Spark Plug Kit ASR-800",
        image: image2,
        reviews: "5 on 5 reviews",
        price: "$40",
      },
    ],
    timing: [
      {
        id: 9,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image1,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 10,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image4,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 11,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image4,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 12,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image4,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
    ],
    oil: [
      {
        id: 13,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image3,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 14,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image4,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 15,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image4,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
      {
        id: 16,
        name: "Brandix Spark Plug Kit ASR-400",
        image: image4,
        reviews: "5 on 5 reviews",
        price: "$20",
      },
    ],
  };

  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on selected category
  const filteredProducts = Datas[selectedCategory];
  return (
    <div className="na-body">
      <NaHeader
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NaBodyItem itemData={filteredProducts} />
      <NaBodyItem itemData={filteredProducts} />
    </div>
  );
};

export default NaBody;
