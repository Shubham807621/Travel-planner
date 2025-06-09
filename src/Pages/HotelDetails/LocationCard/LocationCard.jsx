import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationCard.css';

const LocationCard = ({hoteldetails}) => {
    
        if (!hoteldetails) {
        return <div className="hotel-name">Loading hotel details...</div>;
    }

    return (
        <div className="location-card">
            <div className="map-container">
        
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23210.96069222513!2d73.27149792595448!3d17.134240328654755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0f002b11fd5d%3A0x870bb0f727fa3064!2sParin%20Hotel%20and%20Resort.!5e1!3m2!1sen!2sin!4v1749481622942!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
