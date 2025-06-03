import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationCard.css';

const LocationCard = () => {
    const position = [27.0238, 74.2179]; // Rajasthan

    return (
        <div className="location-card">
            <div className="map-container">
                <MapContainer
                    center={position}
                    zoom={6}
                    scrollWheelZoom={false}
                    className="map"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Rajasthan</Popup>
                    </Marker>
                </MapContainer>
            </div>

            <div className="details">
                <h2 className="score">8.5 Excellent</h2>
                <p className="subtext">Location rating score</p>

                <ul className="features">
                    <li><strong>🌟 Excellent location</strong> - Inside city center</li>
                    <li><strong>🏙️ Popular neighborhood</strong></li>
                    <li><strong>🚶 Excellent for walking</strong></li>
                </ul>

                <div className="parking">
                    <span>🅿️ Parking</span>
                    <span className="parking--free">FREE</span>
                </div>

                <div className="walkable">
                    <p><strong>Walkable places:</strong></p>
                    <ul>
                        <li>Ajmera Marol Naka Station – 270 m</li>
                    </ul>
                </div>

                <button className="button">SEE NEARBY PLACES</button>
            </div>
        </div>
    );
};

export default LocationCard;
