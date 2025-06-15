import React from 'react';
import './PlanJourney.css';
import carImage from '../../../Images/HotelDetails/cabs/Cab1.jpeg';
import { useNavigate } from 'react-router-dom';

const PlanJourney = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/book-ride")
    }
    return (
        <section className="plan-journey-section">
            <h2>Plan your journey with ease</h2>
            <p className="subtitle">Book your rides to and from your hotel</p>

            <div className="journey-content">
                {/* Hotel to Destination */}
                <div className="ride-box">
                    <img src={carImage} alt="Car" className="car-img" />
                    <h3>From Hotel to Destination</h3>
                    <p>Book a cab to the airport, city, or your next adventure</p>
                    <p className="date">Select Date</p>
                    <button className="btn-search" onClick={()=>handleClick()}>Book Now</button>
                </div>

                {/* Arrival Journey Timeline */}
                <div className="journey-timeline">
                    <h4 className="timeline-heading">Arrival Journey</h4>
                    <div className="timeline-step">
                        <span className="icon">📲</span>
                        <p>Reserve pickup online</p>
                    </div>
                    <div className="timeline-step">
                        <span className="icon">✈️</span>
                        <p>Land at airport / arrive at station</p>
                    </div>
                    <div className="timeline-step">
                        <span className="icon">🚕</span>
                        <p>Meet your driver with your nameboard</p>
                    </div>
                    <div className="timeline-step">
                        <span className="icon">🏨</span>
                        <p>Reach your hotel smoothly</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanJourney;
