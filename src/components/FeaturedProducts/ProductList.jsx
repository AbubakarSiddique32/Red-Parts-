import "./ProductList.css";
const ProductList = (props) => {
  return (
    <>
      <li key={props.productId} className="slider-item">
        <div className="sale-badge">Sale</div>
        <img src={props.image} alt={props.name} className="product-image" />
        <p className="sku">SKU: {props.sku}</p>
        <h3 className="product-name">{props.name}</h3>
        <div className="reviews">
          <div className="review-icon">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>

          <p>{props.reviews}</p>
        </div>

        <p className="price">
          {props.price} <i className="fa-solid fa-cart-shopping"></i>
        </p>
      </li>
    </>
  );
};

export default ProductList;
