import React from "react";
import "./LnbItem.css";

const LnbItem = (props) => {
  return (
    <div className="lnb-body">
      {props.itemdata.map((idata) => (
        <div className="lnb-item" key={idata.id}>
          <div className="lnbi-image">
            <img src={idata.image} alt={idata.name} />
          </div>
          <div className="lnb-data">
            <span>{idata.name}</span>
            <h4>{idata.description}</h4>
            <p>{idata.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LnbItem;
