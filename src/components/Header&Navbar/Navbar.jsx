import { useState } from "react";
import "../Header&Navbar/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? "" : menuName);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="redparts">
          <Link to="/">
            <h2>
              <span>Red</span>Parts
            </h2>
          </Link>
        </div>
        <div className="navbar-left">
          <ul className="links">
            <li className="dropdown">
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="dropdown" id="mobile-none">
              <a
                href="#"
                onClick={() => toggleDropdown("blog")}
                className="dropdown-trigger"
              >
                Blog <span>▾</span>
              </a>
              {openDropdown === "blog" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">SEO Optimization</a>
                  </li>
                  <li>
                    <a href="#">Digital Marketing</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="dropdown" id="mobile-none">
              <a
                href="#"
                onClick={() => toggleDropdown("account")}
                className="dropdown-trigger"
              >
                Account <span>▾</span>
              </a>
              {openDropdown === "account" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Login</a>
                  </li>
                  <li>
                    <a href="">Register</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="dropdown" id="mobile-none">
              <a
                href="#"
                onClick={() => toggleDropdown("pages")}
                className="dropdown-trigger"
              >
                Pages <span>▾</span>
              </a>
              {openDropdown === "pages" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Page</a>
                  </li>
                  <li>
                    <a href="">Page</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-badge">0</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
