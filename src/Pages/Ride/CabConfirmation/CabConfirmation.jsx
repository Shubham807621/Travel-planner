import React, { useEffect } from 'react'
import './CabConfirmation.css'
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import thanksyou from '../../../Images/thank you.mp4';
import { useLocation } from 'react-router-dom';

export default function CabConfirmation() {
    const location = useLocation();
    const booking = location.state || {};
    useEffect(() => {
  console.log("Booking data received:", booking);
}, [booking]);
    return (
        <>
            <div className="cab-confirmation-wrapper">
                <div className="cab-img-wrapper">
                    <div className="image-banner"></div>
                    <h1 className="cab-content">Cab Confirmation</h1>

                </div>

                <div className="confirmation-box">
                    <div className="success-icon-wrapper">
                        <CheckIcon className='check-icon' />
                    </div>
                    <div className="confirmation-message">
                        <h2>PAYMENT CONFIRMED</h2>
                        <p>Thank you, your payment has been successful and your booking is now confirmed</p>
                    </div>
                </div>

                <div className="cab-confirmation-container">
                    <div className="cab-confirmation-details">
                        <div className="booking-row"><span>Booking id:</span>#{Math.floor(Math.random() * 1000000)} </div>
                        <div className="booking-row"><span>Pick Up:</span> {booking.pickup}</div>
                        <div className="booking-row"><span>Drop Off:</span> {booking.dropoff}</div>
                        <div className="booking-row"><span>Pickup Date:</span> {booking.pickupDate}</div>
                        <div className="booking-row"><span>Pickup Time:</span> {booking.pickupTime}</div>
                        <div className="booking-row"><span>No. of Travellers:</span> {booking.travelers}</div>
                        <div className="booking-row"><span>Cab Name:</span> {booking.cabName}</div>
                        <div className="booking-row"><span>Price:</span> ₹{booking.price}</div>
                        
                    </div>
                    <div className="confirmation-price-summary">
                        <h2 className="summary-title">Help & Support</h2>

                        <div className="support-info">

                            <p className='mt-3'>Call us at <strong>+91 1234567890</strong></p>
                            <p className='mt-3'>Address: <strong> 3146 Koontz, India</strong></p>

                        </div>
                        <video className='thanks-video'
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={thanksyou}></video>
                    </div>
                </div>

            </div>
        </>
    )


}
