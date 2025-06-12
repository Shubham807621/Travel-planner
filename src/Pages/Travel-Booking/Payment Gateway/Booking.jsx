import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../../Components/APIServices/apiservice';

const Booking = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [hotelName, setHotelName] = useState("");
  const insuranceCost = 34;
  const taxCost = 50; // Example additional cost
  const roomCost = room?.pricePerNight || 0;
  const userId = localStorage.getItem("userId")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardDetails, setCardDetails] = useState(() => {
    // Load from localStorage if available
    const stored = localStorage.getItem('cardDetails');
    return stored ? JSON.parse(stored) : {
      cardNumber: '',
      expiryDate: '',
      securityCode: ''
    };
  });

  const [address, setAddress] = useState(() => {
    const stored = localStorage.getItem('addressData');
    return stored ? JSON.parse(stored) : {
      country: '',
      state: '',
      streetLine1: '',
      streetLine2: '',
      city: '',
      postalCode: '',
    };
  });

  // Update localStorage whenever cardDetails changes
  useEffect(() => {
    localStorage.setItem('cardDetails', JSON.stringify(cardDetails));
  }, [cardDetails]);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => {
      const updated = { ...prev, [name]: value };
      localStorage.setItem('addressData', JSON.stringify(updated)); // Save to localStorage
      return updated;
    });
  };

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

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await getUserDetails(userId);
        setEmployee(response);
        localStorage.setItem("userDetails", JSON.stringify(response));

        // Split name only if available
        if (response.name) {
          const nameParts = response.name.trim().split(" ");
          setFirstName(nameParts[0]);
          setLastName(nameParts.slice(1).join(" "));
        }
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchUserDetails();

  }, [userId])

  const calculateTotal = () => {
    return roomCost + insuranceCost + taxCost;
  };


  if (!room) {
    return <div>No room selected</div>;
  }


  return (
    <div className="booking-container-wrapper">

      <div className="booking-img-wrapper">
        <div className="image-banner"></div>
        <h1 className="booking-heading">BOOKING</h1>

      </div>

      <div className="main-content">

        <div className="form-section">

          <div className="section">
            <h2 className="section-title">
              <span className="step-number">1</span> Your Details
            </h2>
            <div className="form-grid">
              <input type="text" placeholder="First Name*" value={firstName} className="input-field" readOnly />
              <input type="text" placeholder="Last Name*" value={lastName} className="input-field" readOnly />
              <input type="email" placeholder="Email*" value={employee?.email || ""} className="input-field" readOnly />
              <input type="tel" placeholder="Phone Number*" value={employee?.phoneNumber || ""} className="input-field" readOnly />
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">
              <span className="step-number">2</span> Payment Information
            </h2>
            <div className="form-grid">
              <input type="text" name="cardNumber" placeholder="Card Number*" className="input-field" value={cardDetails.cardNumber} onChange={handleCardChange} />
              <input type="text" name="expiryDate" placeholder="MM/YY*" className="input-field" value={cardDetails.expiryDate} onChange={handleCardChange} />
              <input type="text" name="securityCode" placeholder="Security Code*" className="input-field" value={cardDetails.securityCode} onChange={handleCardChange} />
            </div>

            <div className="payment-methods">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksNq3RuJaPTeGtVt3S4Bmgk2wUfxRGedLUg&s" alt="Visa" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3iIJalsR7_p8Nk-1AsEY3LSV7eX2ZpJZ9A&s" alt="MasterCard" />
              <img src="https://www.pymnts.com/wp-content/uploads/2014/03/Discover-logo-e1416429693676.jpg" alt="Discover" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" />
            </div>
            <p className="payment-info">
              Or checkout with PayPal, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>


          <div className="section">
            <h2 className="section-title">
              <span className="step-number">3</span> Billing Address
            </h2>
            <div className="form-grid">
              <input 
                type="text" 
                placeholder="Country*" 
                name='country' 
                className="input-field" 
                value={address.country} 
                onChange={handleAddressChange} 
              />
              <input type="text" placeholder="State*" name='state' className="input-field" value={address.state} onChange={handleAddressChange} />
              <input type="text" placeholder="Street Line 1*" name='streetLine1' className="input-field" value={address.streetLine1} onChange={handleAddressChange} />
              <input type="text" placeholder="Street Line 2" name='streetLine2' className="input-field" value={address.streetLine2} onChange={handleAddressChange} />
              <input type="text" placeholder="City*" name='city' className="input-field" value={address.city} onChange={handleAddressChange} />
              <input type="text" placeholder="Postal Code*" name='postalCode' className="input-field" value={address.postalCode} onChange={handleAddressChange} />
              <textarea placeholder="Additional Information (e.g., Special notes for delivery)" className="input-field textarea"></textarea>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="section cancellation-policy">
            <h2 className="section-title">Cancellation Policy</h2>
            <div className="policy-checkbox">
              <input type="checkbox" id="policy-agree" />
              <label htmlFor="policy-agree">I agree to the full terms & conditions and general policy.</label>
            </div>
            <button className="book-now-btn" onClick={() => navigate("/booking-confirmation")}>BOOK NOW</button>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className="summary-section">
          <h2 className="summary-title">Summary</h2>
          <h4>{hotelName}</h4>
          <div className="summary-item">
            <span>{room.roomType}</span>
            <span>₹{room.pricePerNight}</span>
          </div>
          <div className="summary-item">
            <span>Insurance</span>
            <span>₹{insuranceCost}</span>
          </div>

          <div className="summary-item">
            <span>Tax</span>
            <span>₹{taxCost}</span>
          </div>
          <div className="summary-total pt-4">
            <h5 className='fw-bold'>Total Cost</h5>
            <h5>₹{calculateTotal()}</h5>
          </div>
          <div className="support-info">
            <p>Need Help Booking?</p>
            <p>Call us at <strong>+91 1234567890</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;