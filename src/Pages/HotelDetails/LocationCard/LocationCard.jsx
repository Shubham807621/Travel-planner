import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationCard.css';

const LocationCard = ({ hoteldetails }) => {

    if (!hoteldetails) {
        return <div className="hotel-name">Loading hotel details...</div>;
    }


    const encodedAddress = encodeURIComponent(hoteldetails.address);
    const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

    return (
        <div className="location-card">
            <div className="map-container">

                <iframe
                    className="map"
                    src={mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel Location"
                ></iframe>
            </div>

            <div className="details">
                <h2 className="score">{hoteldetails.rating} Rating</h2>
                <p className="subtext">Location rating score</p>

                <ul className="features">
                    <li><strong>🌟 Excellent location</strong> - Inside city center</li>
                    <li><strong>🏙️ Popular neighborhood</strong></li>
                    <li><strong>🚶 Excellent for walking</strong></li>
                </ul>

                <div className="address">
                    <p>Address : {hoteldetails.address}</p>
                </div>

                {/* 
                    <button className="button">SEE NEARBY PLACES</button> */}
            </div>
        </div>
    );
};

export default LocationCard;
