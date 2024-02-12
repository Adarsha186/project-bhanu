// RefundPolicy.js

import React from 'react';
import '../../styles/RefundPolicy.css'; // Import your stylesheet

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <h2>Refund Policy</h2>

      <p>
        At Bhanu Natural Products, we strive to make sure all of our customers are happy. Should you have an issue with any of our products, we are glad to provide a refund considering the appropriate/genuine reason. In some cases, we reserve the right to deduct our shipping cost from the refund amount.
      </p>

      <h3>Return Instructions:</h3>

      <ol>
        <li>Send an email requesting a return label to <a href="mailto:contactbhanuimpex@gmail.com">contactbhanuimpex@gmail.com</a></li>
        <li>Print out the labels and ship the products back to us.</li>
        <li>We will process your refund within 3 - 5 days after receiving the product.</li>
      </ol>
    </div>
  );
};

export default RefundPolicy;
