import React from 'react'
import './BookingConfirmation.css'
import CheckIcon from '@mui/icons-material/Check';

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
  return (
    <>
    <div className="booking-confirmation-wrapper">
        <div className="booking-img-wrapper">
            <div className="image-banner"></div>
        <h1 className="booking-content">Booking</h1>
       
        </div>

        <div className="confirmation-box">
            <div className="success-icon-wrapper">
                <CheckIcon className='check-icon'/>
            </div>
            <div className="confirmation-message">
                <h2>PAYMENT CONFIRMED</h2>
                <p>hank you, your payment has been successful and your booking is now confirmed</p>
            </div>
        </div>

        <div className="booking-confirmation-container">
            <div className="booking-confirmation-details">
                <div className="booking-row"><span>Booking id:</span> {bookingInfo.bookingId}</div>
                <div className="booking-row"><span>First Name:</span> {bookingInfo.firstName}</div>
                <div className="booking-row"><span>Last Name:</span> {bookingInfo.lastName}</div>
                <div className="booking-row"><span>Email:</span> {bookingInfo.email}</div>
                <div className="booking-row"><span>Phone</span> {bookingInfo.phone}</div>
                <div className="booking-row"><span>Card number</span> {bookingInfo.cardNumber}</div>
                <div className="booking-row"><span>Country:</span> {bookingInfo.country}</div>
                <div className="booking-row"><span>Zip Code</span> {bookingInfo.zipCode}</div>
                <div className="booking-row"><span>Address</span> {bookingInfo.address}</div>
            </div>
            <div className="confirmation-price-summary">
                <h2 className="summary-title">Summary</h2>
                <div className="summary-item">
                    <span>Deluxe Goodie Bag</span>
                    <span></span>
                </div>
                <div className="summary-item">
                    <span>Insurance</span>
                    <span></span>
                </div>
                <div className="summary-total">
                    <span>Total Cost</span>
                    <span></span>
                </div>
                <div className="support-info">
                    <p>Need Help Booking?</p>
                    <p>Call us at <strong>+91 9900118899</strong></p>
                </div>
            </div>
        </div>
       
    </div>
    </>
  )
}
