import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './FlightBookingForm.css';
import FlightResults from './FlightResults';

const cities = [
  { value: 'Mumbai', label: 'Mumbai, India' },
  { value: 'Delhi', label: 'Delhi, India' },
  { value: 'Bangalore', label: 'Bangalore, India' },
  { value: 'New York', label: 'New York, USA' },
  { value: 'London', label: 'London, UK' },
];

function FlightBookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tripType: 'oneway',
    fromCity: null,
    toCity: null,
    departureDate: new Date(),
    returnDate: null,
    passengers: { adults: 1, children: 0, infants: 0 },
    travelClass: 'Economy',
  });

  const [hasSearched, setHasSearched] = useState(false);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const totalPassengers =
    formData.passengers.adults + formData.passengers.children + formData.passengers.infants;

  const handlePassengerChange = (type, increment = true) => {
    setFormData((prev) => ({
      ...prev,
      passengers: {
        ...prev.passengers,
        [type]: Math.max(
          increment ? prev.passengers[type] + 1 : prev.passengers[type] - 1,
          type === 'adults' ? 1 : 0
        ),
      },
    }));
  };

  const handleSearch = () => {
    if (!formData.fromCity || !formData.toCity) {
      alert('Please select both cities');
      return;
    }
    setHasSearched(true)
    // navigate('/flights', { state: formData });
  };

  return (
    <div className="flight-booking-wrapper">
      <div className="container flight-form p-4 shadow">
        <div className="d-flex mb-3">
          {['oneway', 'round'].map((type) => (
            <button
              key={type}
              className={`btn ${
                formData.tripType === type ? 'btn-primary' : 'btn-outline-primary'
              } me-2`}
              onClick={() => setFormData((prev) => ({ ...prev, tripType: type }))}
            >
              {type === 'oneway' ? 'One-way' : 'Round-trip'}
            </button>
          ))}
        </div>

        <div className="row g-3 align-items-center">
          <div className="col-md-6">
            <label className="form-label"><FaPlaneDeparture /> Flying from</label>
            <Select
              options={cities}
              value={formData.fromCity}
              onChange={(value) => setFormData((prev) => ({ ...prev, fromCity: value }))}
              placeholder="Select city"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label"><FaPlaneArrival /> Flying to</label>
            <Select
              options={cities}
              value={formData.toCity}
              onChange={(value) => setFormData((prev) => ({ ...prev, toCity: value }))}
              placeholder="Select city"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><FaCalendarAlt /> Departure</label>
            <DatePicker
              className="form-control"
              selected={formData.departureDate}
              onChange={(date) => setFormData((prev) => ({ ...prev, departureDate: date }))}
              dateFormat="dd/MM/yyyy"
            />
          </div>

          {formData.tripType === 'round' && (
            <div className="col-md-6">
              <label className="form-label"><FaCalendarAlt /> Return</label>
              <DatePicker
                className="form-control"
                selected={formData.returnDate}
                onChange={(date) => setFormData((prev) => ({ ...prev, returnDate: date }))}
                minDate={formData.departureDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          )}

          <div className="col-md-6 position-relative">
            <label className="form-label"><FaUser /> Passengers</label>
            <div className="form-control passenger-box" onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}>
              {totalPassengers} Passenger{totalPassengers > 1 ? 's' : ''}, {formData.travelClass}
            </div>

            {showPassengerDropdown && (
              <div className="passenger-dropdown shadow p-3 rounded bg-white" ref={dropdownRef}>
                {['adults', 'children', 'infants'].map((type) => (
                  <div key={type} className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      {type === 'adults' && 'Adults (12yrs and above)'}
                      {type === 'children' && 'Children (2-11yrs)'}
                      {type === 'infants' && 'Infants (below 2yrs)'}
                    </div>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => handlePassengerChange(type, false)}>-</button>
                      <span>{formData.passengers[type]}</span>
                      <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => handlePassengerChange(type, true)}>+</button>
                    </div>
                  </div>
                ))}

                <div className="d-flex justify-content-between flex-wrap mt-3">
                  {['Economy', 'Premium economy', 'Business', 'First Class'].map((cls) => (
                    <button
                      key={cls}
                      className={`btn m-1 ${formData.travelClass === cls ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setFormData((prev) => ({ ...prev, travelClass: cls }))}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-12 text-center mt-3">
            <button className="btn btn-lg btn-primary w-100" onClick={handleSearch}>
              SEARCH FLIGHTS
            </button>
          </div>
        </div>
      </div>

    {hasSearched && (
      <FlightResults/>
    )}
    </div>
  );
}

export default FlightBookingForm;
