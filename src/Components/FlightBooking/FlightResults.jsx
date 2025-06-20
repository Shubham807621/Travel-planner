import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@mui/icons-material'; // Load Material Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FlightIcon from '@mui/icons-material/Flight';
import LuggageIcon from '@mui/icons-material/Luggage';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalBarSharpIcon from '@mui/icons-material/LocalBarSharp';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './FlightResults.css';
import indigoLogo from '../../Images/Flights/indigo.png';
import airIndiaLogo from '../../Images/Flights/airindia.png';
import airIndiaExpressLogo from '../../Images/Flights/air-india-express.png';
import akasaLogo from '../../Images/Flights/akasa-air.png';
import { useNavigate } from 'react-router-dom';

const dummyFlights = [
    {
        airline: "IndiGo",
        logo: indigoLogo,
        from: "Delhi",
        to: "Mumbai",
        price: 5200,
        departure: "10:30 AM",
        arrival: "12:45 PM",
        duration: "2h 15m",
        baggage: "15kg Check-in, 7kg Cabin",
        refundPolicy: "Non-refundable",
        seatType: "Economy Seat",
        Beverages: "Beverages available (Free)",
        Meal: "Meal available (Free)",
    },
    {
        airline: "Air India",
        logo: airIndiaLogo,
        from: "Delhi",
        to: "Mumbai",
        price: 6100,
        departure: "1:00 PM",
        arrival: "3:30 PM",
        duration: "2h 30m",
        baggage: "20kg Check-in, 7kg Cabin",
        refundPolicy: "Refundable with fee",
        seatType: "Economy Seat",
        Beverages: "Beverages available (Free)",
    },
    {
        airline: "Air India Express",
        logo: airIndiaExpressLogo,
        from: "Delhi",
        to: "Mumbai",
        price: 8977,
        departure: "3:00 PM",
        arrival: "6:30 PM",
        duration: "3h 30m",
        baggage: "20kg Check-in, 7kg Cabin",
        refundPolicy: "Refundable with fee",
        seatType: "Economy Seat",
        Beverages: "Beverages available (Free)",
    },
    {
        airline: "Akasa Air",
        logo: akasaLogo,
        from: "Delhi",
        to: "Mumbai",
        price: 11263,
        departure: "2:00 PM",
        arrival: "8:30 PM",
        duration: "6h 30m",
        baggage: "20kg Check-in, 7kg Cabin",
        refundPolicy: "Non-refundable",
        seatType: "Economy Seat",
        Beverages: "Beverages available (Free)",
    },
];

function FlightResults({state }) {
      const { fromCity, toCity, passengers } = state || {};
    const [expandedIndex, setExpandedIndex] = useState(null);
    const navigate = useNavigate();

 
    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="results-container">
            <h3 className='mb-4'>Flights from {state?.fromCity?.label} to {state?.toCity?.label}</h3>
            {dummyFlights.map((flight, index) => (
                <div className="flight-card shadow-sm rounded p-3 mb-3" key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="d-flex align-items-center">
                                <img
                                    src={flight.logo}
                                    alt={flight.airline}
                                    style={{ width: 40, height: 40, objectFit: 'contain', marginRight: 10 }}
                                />
                                {flight.airline}
                            </h5>
                            <p>{flight.departure} → {flight.arrival} ({flight.duration})</p>
                        </div>
                        <div className="text-end">
                            <h4>₹{flight.price}</h4>
                            <button className="btn btn-outline-secondary" onClick={() => toggleExpand(index)}>
                                {expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </button>
                        </div>
                    </div>

                    {expandedIndex === index && (
                        <div className="expanded-details mt-3 p-1 bg-light rounded">

                            <div className="d-flex align-items-center gap-3 flex-wrap my-3  py-3">

                                {flight.Beverages && (
                                    <div className="d-flex align-items-center ">
                                        <LuggageIcon className="me-1" />
                                        <span>{flight.baggage}</span>
                                    </div>
                                )}
                                {flight.Meal && (
                                    <div className="d-flex align-items-center">
                                        <AirlineSeatReclineNormalIcon className="me-1" />
                                        <span>{flight.seatType}</span>
                                    </div>
                                )}
                            </div>
                            <div className="d-flex align-items-center gap-3 flex-wrap my-3  py-3">

                                {flight.Beverages && (
                                    <div className="d-flex align-items-center">
                                        <LocalBarSharpIcon className="me-1" />
                                        <span>{flight.Beverages}</span>
                                    </div>
                                )}
                                {flight.Meal && (
                                    <div className="d-flex align-items-center">
                                        <RestaurantIcon className="me-1" />
                                        <span>{flight.Meal}</span>
                                    </div>
                                )}
                            </div>
                            {/* <button className="flight-booking-btn mt-2" onClick={() => handleSelect(flight)}>Select</button> */}
                            <Link
                                to="/book-now"
                                state={{
                                    flight,
                                    fromCity: state?.fromCity,
                                    toCity: state?.toCity,
                                    passengers: state?.passengers,
                                }}
                                className="flight-booking-btn mt-2 d-inline-block text-decoration-none"
                            >
                                Select
                            </Link>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FlightResults;
