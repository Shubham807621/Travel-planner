import { useNavigate } from 'react-router-dom';
import React, { useState,useRef  } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './FlightBookingForm.css';


const cities = [
  { value: 'Mumbai', label: 'Mumbai, India' },
  { value: 'Delhi', label: 'Delhi, India' },
  { value: 'Bangalore', label: 'Bangalore, India' },
  { value: 'New York', label: 'New York, USA' },
  { value: 'London', label: 'London, UK' },
];

function FlightBookingForm() {

  const navigate = useNavigate(); // ✅ Add this

  

  const [tripType, setTripType] = useState('oneway');
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });

  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [travelClass, setTravelClass] = useState("Economy");
  const dropdownRef = useRef(null);

  
  const increment = (type) => {
    setPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrement = (type) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] - 1, type === 'adults' ? 1 : 0),
    }));
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const toggleDropdown = () => setShowPassengerDropdown(!showPassengerDropdown);

  const handleSearch = () => {
    if (!fromCity || !toCity) {
      alert('Please select both cities');
      return;
    }

    // ✅ Navigate to flight results page with state
    navigate('/flights', {
      state: {
        tripType,
        fromCity,
        toCity,
        departureDate,
        returnDate,
        passengers,
        travelClass,
      },
    });
  };

  return (
    <div className="container flight-form p-4 shadow bg-white rounded">
      <div className="d-flex mb-3">
        <button className={`btn ${tripType === 'oneway' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setTripType('oneway')}>One-way</button>
        <button className={`btn ${tripType === 'round' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTripType('round')}>Round-trip</button>
      </div>

      <div className="row g-3 align-items-center">
        <div className="col-md-6">
          <label className="form-label"><FaPlaneDeparture /> Flying from</label>
          <Select options={cities} value={fromCity} onChange={setFromCity} placeholder="Select city" />
        </div>
        <div className="col-md-6">
          <label className="form-label"><FaPlaneArrival /> Flying to</label>
          <Select options={cities} value={toCity} onChange={setToCity} placeholder="Select city" />
        </div>

        <div className="col-md-6">
        <label className="form-label"><FaCalendarAlt /> Departure</label>
        <DatePicker
            className="form-control"
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            dateFormat="dd/MM/yyyy"
        />
        </div>

        {tripType === 'round' && (
        <div className="col-md-6">
            <label className="form-label"><FaCalendarAlt /> Return</label>
            <DatePicker
            className="form-control"
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            minDate={departureDate}
            dateFormat="dd/MM/yyyy"
            />
        </div>
        )}

          <div className="col-md-6 position-relative">
      <label className="form-label"><FaUser /> Passengers</label>
      <div className="form-control passenger-box" onClick={toggleDropdown}>
        {totalPassengers} Passenger{totalPassengers > 1 ? 's' : ''}, {travelClass}
      </div>

      {showPassengerDropdown && (
        <div className="passenger-dropdown shadow p-3 rounded bg-white" ref={dropdownRef}>
          {['adults', 'children', 'infants'].map((type, i) => (
            <div key={type} className="d-flex justify-content-between align-items-center mb-2">
              <div>
                {type === 'adults' && 'Adults (12yrs and above)'}
                {type === 'children' && 'Children (2-11yrs)'}
                {type === 'infants' && 'Infants (below 2yrs)'}
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decrement(type)}>-</button>
                <span>{passengers[type]}</span>
                <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => increment(type)}>+</button>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between flex-wrap mt-3">
            {['Economy', 'Premium economy', 'Business', 'First Class'].map(cls => (
              <button key={cls} className={`btn m-1 ${travelClass === cls ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTravelClass(cls)}>
                {cls}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>

        

        <div className="col-12 text-center mt-3">
          <button className="btn btn-lg btn-primary w-100" onClick={handleSearch}>SEARCH FLIGHTS</button>
        </div>
      </div>
    </div>
  );
}

export default FlightBookingForm;
