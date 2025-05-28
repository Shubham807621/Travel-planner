import React from 'react';
import './HotelName.css';

const HotelName = () => {
    return (
        <div className="booking-container">
            <div className="left-section">
                <h1>
                    EXPERIENCE THE NATURAL <br />
                    BEAUTY OF ISLAND
                </h1>
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" // Replace with your actual image
                    alt="Nature"
                    className="main-image"
                />
            </div>
        </div >
    );
};

export default HotelName;
