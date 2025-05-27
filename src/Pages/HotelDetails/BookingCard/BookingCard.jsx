// BookingCard.js
import './BookingCard.css';

const BookingCard = () => {
    return (
        <div className="booking-card">
            <div className="price-banner">
                <h2>$649 <span>/ per person</span></h2>
                <div className="rating">⭐ ⭐ ⭐ ☆ ☆</div>
            </div>
            <div className="booking-form">
                <h3>Booking</h3>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Number" />
                <input type="date" />
                <div className="add-options">
                    <p>Add Options</p>
                    <label><input type="checkbox" /> Tour guide</label>
                    <label><input type="checkbox" /> Insurance</label>
                    <label><input type="checkbox" /> Dinner</label>
                    <label><input type="checkbox" /> Bike rent</label>
                </div>
                <button className="book-button">Book Now</button>
            </div>
        </div>
    );
};

export default BookingCard;
