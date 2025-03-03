import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="information">
      <div className="info-body">
        <div className="infob-contact">
          <h3>Contact Us</h3>
          <p>Here is the contact details.</p>
          <div className="number">
            <div className="phone-number">
              <h4>PHONE NUMBER</h4>
              <p>+1 (800) 060-07-30</p>
            </div>
            <div className="phone-number">
              <h4>EMAIL ADDRESS</h4>
              <p>red-parts@example.com</p>
            </div>
            <div className="phone-number">
              <h4>OUR LOCATION</h4>
              <p>715 Fake Street, New York 10021 USA</p>
            </div>
            <div className="phone-number">
              <h4>WORKING HOURS</h4>
              <p>Mon-Sat 10:00pm - 7:00pm</p>
            </div>
          </div>
        </div>
        <div className="infob-information">
          <h3>Information</h3>
          <ul className="infob-information-ul">
            <li>
              <a href="">About US</a>
            </li>
            <li>
              <a href="">Delivery Information</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Brands</a>
            </li>
            <li>
              <a href="">Contact US</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
          </ul>
        </div>
        <div className="infob-account">
          <h3>My Account</h3>
          <ul className="infob-account-ul">
            <li>
              <a href="">Store Information</a>
            </li>
            <li>
              <a href="">Order History</a>
            </li>
            <li>
              <a href="">Wish List</a>
            </li>
            <li>
              <a href="">Newsletter</a>
            </li>
            <li>
              <a href="">Specials</a>
            </li>
            <li>
              <a href="">Gift Certificate</a>
            </li>
            <li>
              <a href="">Affiliate</a>
            </li>
          </ul>
        </div>
        <div className="infob-newsletter">
          <h3>Newsletter</h3>
          <div className="email">
            <label htmlFor="email">
              Enter your email address below to subscribe to our newsletter and
              keep up to date with discounts and special offers.
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address..."
              required
            />
            <button>Subscribe</button>
          </div>
          <p>Follow us on social networks</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
