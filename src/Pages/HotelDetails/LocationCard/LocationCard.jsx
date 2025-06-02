import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationCard.css';

const LocationCard = () => {
    const position = [27.0238, 74.2179]; // Rajasthan

    return (
        <div className="location-card">
            <div className="location-card__map-container">
                <MapContainer
                    center={position}
                    zoom={6}
                    scrollWheelZoom={false}
                    className="location-card__map"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Rajasthan</Popup>
                    </Marker>
                </MapContainer>
            </div>

            <div className="location-card__details">
                <h2 className="location-card__score">8.5 Excellent</h2>
                <p className="location-card__subtext">Location rating score</p>

                <ul className="location-card__features">
                    <li><strong>🌟 Excellent location</strong> - Inside city center</li>
                    <li><strong>🏙️ Popular neighborhood</strong></li>
                    <li><strong>🚶 Excellent for walking</strong></li>
                </ul>

                <div className="location-card__parking">
                    <span>🅿️ Parking</span>
                    <span className="location-card__parking--free">FREE</span>
                </div>

                <div className="location-card__walkable">
                    <p><strong>Walkable places:</strong></p>
                    <ul>
                        <li>Ajmera Marol Naka Station – 270 m</li>
                    </ul>
                </div>

                <button className="location-card__button">SEE NEARBY PLACES</button>
            </div>
        </div>
    );
};

export default LocationCard;
