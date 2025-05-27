import React from 'react';
import './PlanJourney.css';
import airportTransfer from './assets/cabs/cab2.jpeg';
import rentCar from './assets/cabs/Cab1.jpeg';

const PlanJourney = () => {
    return (
        <div className="plan-journey-container">
            <h2 className="title">Plan your journey to your hotel</h2>
            <p className="subtitle">Book your ride in advance for a hassle-free trip</p>

            <div className="card-grid">
                <div className="card">
                    <img src={airportTransfer} alt="Airport Transfer" className="card-image" />
                    <div className="card-content">
                        <h3>Book your airport transfer</h3>
                        <p className="description">Get to your hotel easily and securely</p>
                        <div className="card-footer">
                            <span className="date">25 May · 2 Adults</span>
                            <button className="search-btn">Search</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src={rentCar} alt="Rent a Car" className="card-image" />
                    <div className="card-content">
                        <h3>Rent a car</h3>
                        <p className="description">Find an ideal ride for your trip</p>
                        <div className="card-footer">
                            <span className="date">25 May - 25 May</span>
                            <button className="search-btn">Search</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src={airportTransfer} alt="Airport Transfer" className="card-image" />
                    <div className="card-content">
                        <h3>Book your airport transfer</h3>
                        <p className="description">Get to your hotel easily and securely</p>
                        <div className="card-footer">
                            <span className="date">25 May · 2 Adults</span>
                            <button className="search-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanJourney;
