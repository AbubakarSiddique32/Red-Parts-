import React from "react";
import "./LatestNewsBody.css";
import LnbItem from "./LnbItem";

const LatestNewsBody = (props) => {
  return (
    <div className="lnb">
      <LnbItem itemdata={props.data} />
    </div>
  );
};

export default LatestNewsBody;
