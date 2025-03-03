import "./Attention.css";

import ProductSlider from "../FeaturedProducts/ProductSlider";

const Attention = () => {
  return (
    <div className="attention">
      <div className="heading">
        <h1>Attention! Deal Zone</h1>
        <h4>Hurry up! Discounts up to 70%</h4>
      </div>
      <div className="attention-body">
        <ProductSlider />
      </div>
    </div>
  );
};

export default Attention;
