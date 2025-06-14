import React, { useEffect } from 'react'
import './BookingConfirmation.css'
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import thanksyou from '../../Images/thank you.mp4';

export default function BookingConfirmation() {
    const bookingInfo = {
        bookingId: "999-QSDE-55",
        firstName: "John",
        lastName: "Doe",
        email: "info@travele.com",
        phone: "977 - 222 - 444 - 666",
        cardNumber: "XXX-XXXX-XXX-03",
        country: "London",
        zipCode: "44500",
        address: "445 Mount Eden Road, london, borfish"
    };
    const [room, setRoom] = useState(null);
    const [hotelName, setHotelName] = useState("");
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const cardDetails = JSON.parse(localStorage.getItem('cardDetails'));
    const addressData = JSON.parse(localStorage.getItem('addressData'));

    useEffect(() => {
        const storedRoom = localStorage.getItem("selectedRoom");
        const storedHotel = localStorage.getItem("hotelName");

        if (storedRoom) {
            setRoom(JSON.parse(storedRoom));
        }

        if (storedHotel) {
            setHotelName(storedHotel);
        }
    }, []);

    console.log(cardDetails);

    if (!room) {
        return <div>No room selected</div>;
    }
    return (
        <>
            <div className="booking-confirmation-wrapper">
                <div className="booking-img-wrapper">
                    <div className="image-banner"></div>
                    <h1 className="booking-content">Booking Confirmation</h1>

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

                <div className="booking-confirmation-container">
                    <div className="booking-confirmation-details">
                        <div className="booking-row"><span>Booking id:</span> {bookingInfo.bookingId}</div>
                        <div className="booking-row"><span>Name:</span> {userDetails.name}</div>
                        <div className="booking-row"><span>Email:</span>{userDetails.email}</div>
                        <div className="booking-row"><span>Phone</span> {userDetails.phoneNumber}</div>
                        <div className="booking-row"><span>Hotel Name</span> {hotelName}</div>
                        <div className="booking-row"><span>Card number</span>******{cardDetails.cardNumber.slice(-3)}</div>
                        <div className="booking-row"><span>Country:</span> {addressData.country}</div>
                        <div className="booking-row"><span>Address</span> {addressData.city}</div>
                        <div className="booking-row"><span>Zip Code</span> {addressData.postalCode}</div>
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
