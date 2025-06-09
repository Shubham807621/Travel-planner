import React from 'react';
import './HotelName.css';

const HotelName = ({ hoteldetails }) => {
    if (!hoteldetails) {
        return <div className="hotel-name">Loading hotel details...</div>;
    }

    return (
        <div className="hotel-name">
            <div className="hotel-name__left">
                <h1 className="hotel-name__heading">
                    {hoteldetails.name}
                </h1>
                <img
                    src={hoteldetails.imgUrl}
                    alt={hoteldetails.name}
                    className="hotel-name__image"
                />
            </div>
        </div>
    );
};

export default HotelName;
