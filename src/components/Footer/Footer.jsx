import React from "react";
import "../Footer/Footer.css";
import Information from "./Information";
import Credit from "./Credit";

const Footer = () => {
  return (
    <div className="footer">
      <Information />
      <Credit />
    </div>
  );
};

export default Footer;
