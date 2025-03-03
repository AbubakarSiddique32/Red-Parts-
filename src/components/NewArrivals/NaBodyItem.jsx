import "./NaBodyItem.css";

const NaBodyItem = ({ itemData }) => {
  return (
    <div className="nab">
      {itemData.map((data) => (
        <div className="nab-item" key={data.id}>
          <div className="nabi-image">
            <img src={data.image} alt={data.name} />
          </div>

          <div className="nabi-data">
            <h4>{data.name}</h4>
            <div className="nabi-reviews">
              <div className="reviews-icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>{data.reviews}</p>
            </div>
            <p className="nabi-price">{data.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NaBodyItem;
