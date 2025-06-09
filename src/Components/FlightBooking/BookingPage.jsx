import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function BookingPage() {
  const { state } = useLocation();
  const { flight, passengers } = state || {};
  const totalPassengers = (passengers?.adults || 0) + (passengers?.children || 0);
  const [showModal, setShowModal] = useState(false);

  const handleBooking = () => {
    setShowModal(true);
  };

  return (
    <div className="container" style={{padding:"5% 0"}}>
      <h2>Booking for 
        {/* {flight.airline} */}
        </h2>

      {/* Contact Details Form */}
      <div className="card p-3 mb-4">
        <h4>Contact Details</h4>
        <input type="text" className="form-control mb-2" placeholder="Full Name" />
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input type="tel" className="form-control mb-2" placeholder="Phone Number" />
      </div>

      {/* Passenger Details */}
      <div className="card p-3 mb-4">
  <h4>Passenger Details</h4>
  {[...Array(totalPassengers)].map((_, index) => (
    <div key={index} className="border rounded p-3 mb-3">
      <h6>Passenger {index + 1}</h6>

      <input type="text" className="form-control mb-2" placeholder="Passenger Name" />

      <select className="form-control mb-2">
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <div className="row mb-2">
        <div className="col">
          <select className="form-control">
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="col">
          <select className="form-control">
            <option value="">Month</option>
            {[
              'January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'
            ].map((month, i) => (
              <option key={i + 1} value={i + 1}>{month}</option>
            ))}
          </select>
        </div>
        <div className="col">
          <select className="form-control">
            <option value="">Year</option>
            {Array.from({ length: 100 }, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year}>{year}</option>;
            })}
          </select>
        </div>
      </div>

      <select className="form-control mb-2">
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


      <button className="btn btn-success" onClick={handleBooking}>Book Now</button>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Booking Confirmed</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body text-center">
                <p>🎉 <strong>Thank you for booking with us!</strong></p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
