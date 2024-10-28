import React from 'react';

const ReceiptComponent = () => {
  return (
    <div className="wrapper">
      <div className="receipt-box">
        {/* Header with organization details */}
        <h5>XYZ Non-Profit</h5>
        <h6>456 Another Street</h6>
        <h6>New York, NY 10001</h6>
        
        {/* Contact information */}
        <div className="contact-info">
          <p>
            <a href="mailto:contact@xyznonprofit.org">contact@xyznonprofit.org</a>
          </p>
          <p>Phone: (555) 123-4567</p>
          <p>
            <a href="https://xyznonprofit.org" target="_blank" rel="noopener noreferrer">
              www.xyznonprofit.org
            </a>
          </p>
        </div>

        {/* Payment and donation details */}
        <div className="colored-row">
          <span>Payment Method</span>
          <span>Last 4 Digits</span>
        </div>
        <div className="data-row">
          <span className="font-weight">VISA</span>
          <span>****1234</span>
        </div>

        <div className="colored-row">
          <span>Donation Campaign</span>
          <span>Amount</span>
        </div>
        <div className="data-row">
          <span className="font-weight">Hope for Tomorrow</span>
          <span>$100</span>
        </div>

        {/* Transaction details */}
        <div className="colored-row">
          <span>Transaction ID</span>
          <span>Date</span>
        </div>
        <div className="data-row">
          <span>TXN123456789</span>
          <span>2024-10-26</span>
        </div>

        {/* Thank you message */}
        <div className="thank-you">
          <p>Thank You for Your Generous Support!</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptComponent;
