import React from 'react';
import './HotelName.css';

const HotelName = ({hoteldetails}) => {

    console.log(hoteldetails)
    return (
        <div className="hotel-name">
            <div className="hotel-name__left">
                <h1 className="hotel-name__heading">
                    EXPERIENCE THE NATURAL <br />
                    BEAUTY OF ISLAND
                </h1>
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                    alt="Nature"
                    className="hotel-name__image"
                />
            </div>
        </div>
    );
};

export default HotelName;
