import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-data">
      <div className="contact-data-body">
        <h1>Contact Us</h1>
        <div className="cdb-section1">
          <h3>Get in Touch with RedParts</h3>

          <p>
            We’re here to help! Whether you have a question about our products,
            need assistance with an order, or require expert advice on auto
            parts, our <b>dedicated team is available 24/7</b> to assist you.
          </p>
        </div>
        <div className="cdb-section2">
          <div className="contact-info">
            <h3>📞 Call Us</h3>
            <p>Have an urgent inquiry? Call our support team at:</p>
            <h4>(800) 060-0730</h4>
          </div>
          <div className="contact-info">
            <h3>📧 Email Us</h3>
            <p>Prefer to reach out via email? Send us your queries at:</p>
            <h4 id="email-blue">support@redparts.com</h4>
          </div>
          <div className="contact-info">
            <h3>🏬 Visit Our Store</h3>
            <p>Looking for in-person assistance? Visit our store at:</p>
            <h4>Vehari Punjab, Pakistan</h4>
          </div>
          <div className="contact-info">
            <h3>📩 Send Us a Message</h3>
            <p>
              Fill out our online contact form, and our team will respond
              promptly!
            </p>
            <h4 id="email-blue">support@redparts.com</h4>
          </div>
        </div>

        <div className="cdb-section3">
          <h3>📌 Why Contact Us?</h3>
          <ul>
            <li>
              Need help finding the right <b> parts</b> for your vehicle?
            </li>
            <li>
              Questions about <b> shipping, returns, or payments?</b>
            </li>
            <li>
              Want to know more about <b> our latest offers and discounts?</b>
            </li>
          </ul>
          <p>
            No matter the query, we’re here to provide
            <b> fast, reliable, and friendly support!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
