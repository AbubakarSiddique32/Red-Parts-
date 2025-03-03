import React from "react";
import "./TrackOrder.css";

const TrackOrder = () => {
  return (
    <div className="track-data">
      <div className="track-data-body">
        <h1>Track Your Order</h1>
        <div className="tdb-section1">
          <h3>Stay Updated on Your Shipment</h3>

          <p>
            At <b>RedParts</b>, we ensure fast and reliable delivery of your
            auto parts. Use our <b>Order Tracking Tool</b> to check the status
            of your shipment in real time.
          </p>
        </div>
        <div className="tdb-section2">
          <h3>📦 How to Track Your Order</h3>
          <ol>
            <li>
              <b>Enter Your Order Number</b>– Find your unique order number in
              your confirmation email.
            </li>
            <li>
              <b>Provide Your Email or Phone Number</b>– Enter the email or
              phone number used during checkout.
            </li>
            <li>
              <b> Click "Track Order"</b>– Get instant updates on your shipment
              status.
            </li>
          </ol>
        </div>

        <div className="tdb-section3">
          <h3> 🚚 Order Status Guide</h3>
          <ul>
            <li>
              <b>Order Confirmed </b> – Your order has been placed successfully.
            </li>
            <li>
              <b>Processing </b> – We are preparing your items for shipment.
            </li>
            <li>
              <b> Shipped </b> – Your package is on its way! A tracking number
              will be provided.
            </li>
            <li>
              <b>Out for Delivery </b>– Your order is arriving soon.
            </li>
            <li>
              <b>Delivered </b>– Your package has arrived at your location.
            </li>
          </ul>
        </div>
        <div className="tdb-section4">
          <h3>❓ Need Help?</h3>
          <p>
            If you have any issues tracking your order, feel free to contact our
            <b>24/7 Customer Support:</b>
          </p>
          <h4>
            <b>📞 Call Us: </b>(800) 060-0730
          </h4>
          <h4>
            <b>📧 Email Us: </b> support@redparts.com
          </h4>
          <h2>
            Thank you for shopping with <b>RedParts!</b> 🚗🔧
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
