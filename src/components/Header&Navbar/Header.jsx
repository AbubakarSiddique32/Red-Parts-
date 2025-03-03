import "../Header&Navbar/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="contact">
          <p>Call Us: (800) 060-0730</p>
        </div>
        <div className="left-links">
          <Link to="/about">About Us</Link> {/* ✅ Use <Link> instead of <a> */}
          <Link to="/contact">Contacts</Link>{" "}
          {/* ✅ Navigates to Contacts page */}
          <Link to="/track-order" id="blue">
            Track Order
          </Link>{" "}
          {/* ✅ Navigates to Track Order page */}
        </div>
      </div>
      <div className="header-center">
        <p>AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES</p>
      </div>
      <div className="header-right">
        <p>
          Compare : <b>5</b>
        </p>
        <p>
          Currency : <b>USD</b>
        </p>
        <p>
          Language : <b>EN</b>
        </p>
      </div>
    </div>
  );
};

export default Header;
