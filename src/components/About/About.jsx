import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-data">
      <div className="about-data-body">
        <h1>About RedParts</h1>
        <div className="adb-section1">
          <h3>Your Trusted Partner for Auto Parts</h3>

          <p>
            At <b>RedParts</b>, we are passionate about keeping your vehicle in
            top shape. Whether you drive a car, truck, or motorcycle, we offer a
            <b> comprehensive selection of high-quality auto parts</b> from
            <b> hundreds of trusted brands</b>. Our mission is to
            <b> make finding the right parts easy, fast, and affordable</b> .
          </p>
        </div>
        <div className="adb-section2">
          <h3>Why Choose Us?</h3>

          <ul>
            <li>
              <b>Extensive Catalog</b> – We provide a vast collection of parts
              for different makes and models.
            </li>
            <li>
              <b>User-Friendly Search</b> – Our advanced search system helps you
              find the perfect fit for your vehicle in just a few clicks.
            </li>
            <li>
              <b>Competitive Pricing</b>– We offer the best deals on auto parts
              without compromising on quality.
            </li>
            <li>
              <b> Fast & Free Shipping</b>– Get your orders delivered quickly,
              with free shipping options available.
            </li>
            <li>
              <b>24/7 Customer Support</b>– Our dedicated support team is
              available around the clock to assist you.
            </li>
          </ul>
        </div>

        <div className="adb-section3">
          <h3>Our Commitment to Quality</h3>
          <p>
            At <b>RedParts</b>, we
            <b>care about your vehicle’s performance and safety</b> . That’s why
            we only source genuine, high-quality auto parts. Every product is
            thoroughly inspected to ensure
            <b>durability and reliability</b>.
          </p>
        </div>

        <div className="adb-section4">
          <h3>Contact Us</h3>
          <p>
            Got questions? Need help finding the right part?
            <b>We're here for you!</b>
          </p>
          <p>
            📞 <b>Call Us</b>: (800) 060-0730
          </p>
          <p>
            📧 <b>Email Us</b>: support@redparts.com
          </p>
          <p>
            📍 <b>Visit Us</b>: [Our Store Location]
          </p>
          <p className="note">
            <strong>
              Join thousands of satisfied customers and experience the best in
              auto parts shopping with RedParts! 🚗🔧
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
