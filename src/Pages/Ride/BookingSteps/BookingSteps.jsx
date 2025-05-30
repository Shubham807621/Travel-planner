import React from "react";
import {
    FaHourglassHalf,
    FaWallet,
    FaBan,
    FaHeadset,
    FaSearch,
    FaHandPointer,
    FaCheck
} from "react-icons/fa";

import "./BookingSteps.css";

const BookingSteps = () => {
    return (
        <div className="booking-container">
            {/* Top Info Icons */}
            <div className="info-row">
                <div className="info-box">
                    <FaHourglassHalf className="info-icon" />
                    <span>Flight Delayed? We wait for you!</span>
                </div>
                <div className="info-box">
                    <FaWallet className="info-icon" />
                    <span>Budget to Premium options</span>
                </div>
                <div className="info-box">
                    <FaBan className="info-icon" />
                    <span>Online Cancellation on 99% of rides</span>
                </div>
                <div className="info-box">
                    <FaHeadset className="info-icon" />
                    <span>24/7 Customer Service</span>
                </div>
            </div>

            {/* Steps */}
            <div className="steps-row">
                <div className="step-card">
                    <div className="step-icon">
                        <FaSearch />
                    </div>
                    <h3>Search</h3>
                    <p>Let us know where you'd like to go.</p>
                </div>

                <div className="arrow">›</div>

                <div className="step-card">
                    <div className="step-icon">
                        <FaHandPointer />
                    </div>
                    <h3>Choose</h3>
                    <p>We'll show you options, choose the right one for you.</p>
                </div>

                <div className="arrow">›</div>

                <div className="step-card">
                    <div className="step-icon">
                        <FaCheck />
                    </div>
                    <h3>Book</h3>
                    <p>Book and receive instant confirmation!</p>
                </div>
                <div className="cta">
                    <button className="cta-button">GIVE IT A TRY!</button>
                </div>
            </div>
        </div>
    );
};

export default BookingSteps;
