// RideBookingForm.jsx
import React, { useState } from 'react';
import './RideBookingForm.css';
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CabList from '../CabList/CabList';

const RideBookingForm = () => {
    const [isRoundTrip, setIsRoundTrip] = useState(true);
    const [rideType, setRideType] = useState('point');
    const [rideDuration, setRideDuration] = useState('1 hour');
    const navigate = useNavigate();
    const [hasSearched, setHasSearched] = useState(false);

    return (
        <>
        
        <div className="booking-container">
            <div className="ride-type-toggle">
                <button
                    className={rideType === 'point' ? 'active' : ''}
                    onClick={() => setRideType('point')}
                >
                    ↻ Point-to-Point
                </button>
                <button
                    className={rideType === 'hourly' ? 'active' : ''}
                    onClick={() => setRideType('hourly')}
                >
                    🕓 Hourly Ride
                </button>
            </div>

            <h1 className="headline">Save yourself time. Book your ride instantly.</h1>

            <div className="booking-card">
                <div className="input-group">
                    <label>Pick Up</label>
                    <div className="input-with-icon">
                        <MapPinIcon size={18} />
                        <input type="text" placeholder="Airport, address, place or hotel name..." />
                    </div>
                </div>

                {rideType === 'point' && (
                    <div className="input-group">
                        <label>Drop Off</label>
                        <div className="input-with-icon">
                            <MapPinIcon size={18} />
                            <input type="text" placeholder="Airport, address, place or hotel name..." />
                        </div>
                    </div>
                )}

                <div className="input-group">
                    <label>Pickup Date</label>
                    <div className="input-with-icon">
                        <CalendarIcon size={18} />
                        <input type="date" defaultValue="2025-05-30" />
                    </div>
                </div>

                <div className="input-group">
                    <label>Pickup Time</label>
                    <div className="input-with-icon">
                        <ClockIcon size={18} />
                        <input type="time" defaultValue="00:00" />
                    </div>
                </div>

                {rideType === 'hourly' && (
                    <div className="input-group">
                        <label>Ride Duration</label>
                        <select value={rideDuration} onChange={(e) => setRideDuration(e.target.value)}>
                            <option value="1 hour">1 hour</option>
                            <option value="2 hours">2 hours</option>
                            <option value="3 hours">3 hours</option>
                            <option value="4 hours">4 hours</option>
                            <option value="5 hours">5 hours</option>
                            <option value="6 hours">6 hours</option>
                            <option value="7 hours">7 hours</option>
                            <option value="8 hours">8 hours</option>
                        </select>
                    </div>
                )}

                <div className="input-group">
                    <label>Number of Travelers</label>
                    <div className="input-with-icon">
                        <UsersIcon size={18} />
                        <input type="number" defaultValue={1} min={1} />
                    </div>
                </div>

                {rideType === 'point' && (
                    <div className="roundtrip-toggle">
                        <label>Roundtrip?</label>
                        <div className="toggle-buttons">
                            <button
                                className={!isRoundTrip ? 'active' : ''}
                                onClick={() => setIsRoundTrip(false)}
                            >
                                No
                            </button>
                            <button
                                className={isRoundTrip ? 'active' : ''}
                                onClick={() => setIsRoundTrip(true)}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                )}

                {rideType === 'point' && isRoundTrip && (
                    <>
                        <div className="input-group">
                            <label>Return Pickup Date</label>
                            <div className="input-with-icon">
                                <CalendarIcon size={18} />
                                <input type="date" defaultValue="2025-06-02" />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Return Pickup Time</label>
                            <div className="input-with-icon">
                                <ClockIcon size={18} />
                                <input type="time" defaultValue="00:00" />
                            </div>
                        </div>
                    </>
                )}

                <button className="search-button" onClick={()=> setHasSearched(true)}>SEARCH</button>
            </div>

        </div>
            {hasSearched && (
                <CabList />
            )}
        </>
    );
};

export default RideBookingForm;


