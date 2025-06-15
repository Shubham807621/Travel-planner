import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingPage.css';

function BookingPage() {
  const { state } = useLocation();
  const { flight, passengers } = state || {};
  const totalPassengers = (passengers?.adults || 0) + (passengers?.children || 0);
  const [showModal, setShowModal] = useState(false);

  const handleBooking = () => {
    setShowModal(true);
  };

  return (
    <div className="flight-booking-page">
      <h2 className="flight-booking-title">Booking for {flight?.airline}</h2>

      {/* Flight Summary */}
      {flight && (
        <div className="flight-booking-summary">
          <div className="backgroun-img-wrapper"></div>
          <div className="flight-booking-summary-header">
            <img src={flight.logo} alt={flight.airline} className="flight-logo" />
            <div className="flight-info">
              <h5>{flight.airline}</h5>
              <p>{flight.from} → {flight.to}</p>
              <p>{flight.departure} → {flight.arrival}</p>
              <p>Duration: {flight.duration}</p>
              <p>Refund Policy: {flight.refundPolicy}</p>
            </div>
            <div className="flight-price">
              <h4>₹{flight.price}</h4>
              <small>{totalPassengers} Passenger(s)</small>
              <p className="total-price">Total: ₹{flight.price * totalPassengers}</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Details Form */}
      <div className="contact-form">
        <h4>Contact Details</h4>
        <input type="text" className="input-field" placeholder="Full Name" />
        <input type="email" className="input-field" placeholder="Email" />
        <input type="tel" className="input-field" placeholder="Phone Number" />
      </div>

      {/* Passenger Details */}
      <div className="passenger-section">
        <h4>Passenger Details</h4>
        {[...Array(totalPassengers)].map((_, index) => (
          <div key={index} className="passenger-box">
            <h6>Passenger {index + 1}</h6>
            <input type="text" className="input-field" placeholder="Passenger Name" />
            <select className="input-field">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <div className="dob-row">
              <select className="dob-select">
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select className="dob-select">
                <option value="">Month</option>
                {[
                  'January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'
                ].map((month, i) => (
                  <option key={i + 1} value={i + 1}>{month}</option>
                ))}
              </select>
              <select className="dob-select">
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year}>{year}</option>;
                })}
              </select>
            </div>
            <select className="input-field">
              <option value="">Nationality</option>
              <option>Indian</option>
              <option>American</option>
              <option>British</option>
              <option>Canadian</option>
              <option>Australian</option>
              <option>Other</option>
            </select>
          </div>
        ))}
      </div>

      <button className="book-btn" onClick={handleBooking}>Book Now</button>

      {/* Modal */}
      {showModal && (
        <div className="flight-booking-modal">
          <div className="modal-container">
            <div className="modal-header">
              <h5>Booking Confirmed</h5>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>🎉 <strong>Thank you for flight-booking with us!</strong></p>
            </div>
            <div className="modal-footer">
              <button className="btn-close-modal" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
