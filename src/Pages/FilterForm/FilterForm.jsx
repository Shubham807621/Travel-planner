import React, { useState } from 'react';
import './FilterForm.css';
import PeopledIcon from '@mui/icons-material/PeopleAltOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import axios from 'axios';
import { SearchHotels } from '../../Components/APIServices/apiservice';
import { useNavigate } from 'react-router-dom';

export default function FilterForm() {
    const [formData, setFormData] = useState({
        city: '',
        checkInDate: '',
        checkoutDate: '',
        adults: 2,
        rooms: 1
    });

    const [showDropdown, setShowDropdown] = useState(false);
    const [hotels, setHotels] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const Navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const increment = (field) => {
        setFormData(prev => ({ ...prev, [field]: prev[field] + 1 }));
    };

    const decrement = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field] > 0 ? prev[field] - 1 : 0
        }));
    };

    const handleClickAway = () => {
        setShowDropdown(false);
    };

    const handleSubmit = async () => {

        try {
            const response = await SearchHotels(formData);
            console.log(response);
            
            setHotels(response);
            setHasSearched(true);
        } catch (error) {
            console.error('Search failed:', error);
        }
    };

    const handleClick = (id,cityName) => {
        Navigate(`/destination/${cityName}/hotel-details/${id}`)
    }

    return (
        <div className="filter-form-wrapper">
            <div className='filter-form'>
                <div className="input-group">
                    <label>Search Destination</label>
                    <input
                        type="text"
                        name="city"
                        className="input-box"
                        placeholder="Enter Destination..."
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <label>Checking Date</label>
                    <input
                        type="date"
                        name="checkInDate"
                        className="input-box"
                        value={formData.checkInDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <label>Checkout Date</label>
                    <input
                        type="date"
                        name="checkoutDate"
                        className="input-box"
                        value={formData.checkoutDate}
                        onChange={handleChange}
                    />
                </div>

                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className="input-group">
                        <label>Enter Member</label>
                        <button
                            type="button"
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="person-btn"
                        >
                            <span><PeopledIcon /> {formData.adults} adults</span>
                            <span>• {formData.rooms} room</span>
                        </button>

                        {showDropdown && (
                            <div className="dropdown-menu-member z-10 mt-2 w-64">
                                {[
                                    { label: 'Room', field: 'rooms' },
                                    { label: 'Adults', field: 'adults', sub: 'Ages 18 or above' }
                                ].map(({ label, field, sub }) => (
                                    <div key={field} className="d-flex justify-content-between align-items-center py-2">
                                        <div>
                                            <div className="text-label fw-bold">{label}</div>
                                            {sub && <div className="text-sm sub-text">{sub}</div>}
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <button
                                                onClick={() => decrement(field)}
                                                className="plus-btn"
                                            >−</button>
                                            <span className='fw-bold'>{formData[field]}</span>
                                            <button
                                                onClick={() => increment(field)}
                                                className="minus-btn"
                                            >+</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </ClickAwayListener>

                <div className="input-group">
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            {hasSearched && (
                <div className='result-hotels'>
                    <h2>Available Hotels</h2>
                    {Array.isArray(hotels) && hotels.length === 0 ? (
                        <p>No hotels found for the selected destination.</p>
                    ) : (
                        Array.isArray(hotels) && (
                            <ul>
                                {hotels.map((hotel) => (
                                    <li key={hotel.id}>
                                        <img
                                            src={hotel.imgUrl}
                                            alt={hotel.name}
                                           onClick={()=>handleClick(hotel.id, hotel.cityName)}
                                        />
                                        <div>
                                            <h3>{hotel.name}</h3>
                                            <p><strong>City:</strong> {hotel.cityName}</p>
                                            <p><strong>Rating:</strong> {hotel.rating}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
