import React, { useState } from "react";
import "./LatestNews.css";
import LatestNewsBody from "./LatestNewsBody";
import LatestNewsHeader from "./LatestNewsHeader";
import Brands from "./Brands";
import image1 from "../ProductsUI/latestnewsUI/news1.jpg";
import image2 from "../ProductsUI/latestnewsUI/news2.jpg";
import image3 from "../ProductsUI/latestnewsUI/news3.jpg";
import image4 from "../ProductsUI/latestnewsUI/news4.jpg";

const LatestNews = () => {
  const Data = {
    all: [
      {
        id: 1,
        name: "Special Offers",
        image: image1,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 2,
        name: "Latest News",
        image: image2,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 3,
        name: "New Arrivals",
        image: image3,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 4,
        name: "Special Offers",
        image: image4,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
    ],
    special: [
      {
        id: 5,
        name: "Special Offers",
        image: image1,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 6,
        name: "Special Offers",
        image: image1,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 7,
        name: "Special Offers",
        image: image1,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 8,
        name: "Special Offers",
        image: image1,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
    ],
    new: [
      {
        id: 9,
        name: "New Arrivals",
        image: image2,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 10,
        name: "New Arrivals",
        image: image2,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 11,
        name: "New Arrivals",
        image: image2,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 12,
        name: "New Arrivals",
        image: image2,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
    ],
    reviews: [
      {
        id: 13,
        name: "Latest News",
        image: image3,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 14,
        name: "Latest News",
        image: image3,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 15,
        name: "Latest News",
        image: image3,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
      {
        id: 16,
        name: "Latest News",
        image: image3,
        description: "Philosophy That Addresses Topics Such As Goodness",
        author: "— By Jessica Moore on October 19, 2019",
      },
    ],
  };

  const [chooseCateory, setChooseCategory] = useState("all");
  const newsdata = Data[chooseCateory];
  return (
    <div className="latestnews">
      <LatestNewsHeader
        chooseCateory={chooseCateory}
        setChooseCategory={setChooseCategory}
      />
      <LatestNewsBody data={newsdata} />

      <Brands />
    </div>
  );
};

export default LatestNews;
