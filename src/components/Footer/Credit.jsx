import React from "react";
import "./Credit.css";
import payment from "../Footer/payments.png";

const Credit = () => {
  return (
    <div className="credit">
      <div className="credit-body">
        <div className="cb-left">
          <h4>
            @Copyright 2025 , Created by <span>Abubakar Siddique</span>
          </h4>
        </div>
        <div className="cb-right">
          <div className="cb-right-image">
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
