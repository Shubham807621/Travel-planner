import React from 'react';
import './Booking.css';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  return (
    <div className="booking-container-wrapper">

      <div className="booking-img-wrapper">
        <div className="image-banner"></div>
        <h1 className="booking-heading">BOOKING</h1>
       
      </div>


      {/* <div className="progress-steps">
        <div className="step active">
          <span className="step-circle"></span>
          <span className="step-text">Your Cart</span>
        </div>
        <div className="step active">
          <span className="step-circle"></span>
          <span className="step-text">Your Details</span>
        </div>
        <div className="step">
          <span className="step-circle"></span>
          <span className="step-text">Finish</span>
        </div>
      </div> */}


      <div className="main-content">

        <div className="form-section">

          <div className="section">
            <h2 className="section-title">
              <span className="step-number">1</span> Your Details
            </h2>
            <div className="form-grid">
              <input type="text" placeholder="First Name*" className="input-field" />
              <input type="text" placeholder="Last Name*" className="input-field" />
              <input type="email" placeholder="Email*" className="input-field" />
              <input type="email" placeholder="Confirm Email*" className="input-field" />
              <input type="tel" placeholder="Phone Number*" className="input-field" />
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">
              <span className="step-number">2</span> Payment Information
            </h2>
            <div className="form-grid">
              <input type="text" placeholder="Card Number*" className="input-field" />
              <input type="text" placeholder="MM/YY*" className="input-field" />
              <input type="text" placeholder="Security Code*" className="input-field" />
            </div>
            <div className="payment-methods">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksNq3RuJaPTeGtVt3S4Bmgk2wUfxRGedLUg&s" alt="Visa" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3iIJalsR7_p8Nk-1AsEY3LSV7eX2ZpJZ9A&s" alt="MasterCard" />
              <img src="https://www.pymnts.com/wp-content/uploads/2014/03/Discover-logo-e1416429693676.jpg" alt="Discover" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" />
            </div>
            <p className="payment-info">
              Or checkout with PayPal, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>


          <div className="section">
            <h2 className="section-title">
              <span className="step-number">3</span> Billing Address
            </h2>
            <div className="form-grid">
              <select className="input-field">
                <option>Select Your Country</option>
                <option>Country 1</option>
                <option>Country 2</option>
              </select>
              <input type="text" placeholder="Street Line 1*" className="input-field" />
              <input type="text" placeholder="Street Line 2" className="input-field" />
              <input type="text" placeholder="City*" className="input-field" />
              <input type="text" placeholder="State*" className="input-field" />
              <input type="text" placeholder="Postal Code*" className="input-field" />
              <textarea placeholder="Additional Information (e.g., Special notes for delivery)" className="input-field textarea"></textarea>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="section cancellation-policy">
            <h2 className="section-title">Cancellation Policy</h2>
            <div className="policy-checkbox">
              <input type="checkbox" id="policy-agree" />
              <label htmlFor="policy-agree">I agree to the full terms & conditions and general policy.</label>
            </div>
            <button className="book-now-btn" onClick={()=>navigate("/booking-confirmation")}>BOOK NOW</button>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className="summary-section">
          <h2 className="summary-title">Summary</h2>
          <div className="summary-item">
            <span>Deluxe Goodie Bag</span>
            <span>£500</span>
          </div>
          <div className="summary-item">
            <span>Insurance</span>
            <span>£34</span>
          </div>
          <div className="summary-total">
            <span>Total Cost</span>
            <span>£534</span>
          </div>
          <div className="support-info">
            <p>Need Help Booking?</p>
            <p>Call us at <strong>+44 123 456 7890</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;