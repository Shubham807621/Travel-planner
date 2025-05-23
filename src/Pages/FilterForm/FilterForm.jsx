import React, { useState } from 'react'
import './FilterForm.css'
import PeopledIcon from '@mui/icons-material/PeopleAltOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function FilterForm() {
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [showDropdown, setShowDropdown] = useState(false);
   
    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => {
        if (value > 0) setter(value - 1);
    };


    const handleClickAway = () => {
        setShowDropdown(false);
    };

    return (
        <>
            <div className="filter-form-wrapper">
                <div className='filter-form'>
                    <div className="input-group">
                        <label>Search Destination</label>
                        <input type="text" className='input-box' placeholder='Enter Destination...' />
                    </div>              
                    <div className="input-group">
                        <label>Checking Date</label>
                        <input type="date" className='input-box' placeholder='Enter Destination...' />
                    </div>
                    <div className="input-group">
                        <label>Checkout Date</label>
                        <input type="date" className='input-box' placeholder='Enter Destination...' />
                    </div>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div className="input-group">
                            <label>Enter Member</label>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="person-btn "
                            >
                                <span><PeopledIcon/> {adults} adults</span>
                                <span>• {rooms} room</span>
                            </button>
                            {showDropdown && (
                                <div className="dropdown-menu-member  z-10 mt-2 w-64 ">
                                    {[
                                        { label: 'Room', value: rooms, setter: setRooms },
                                        { label: 'Adults', value: adults, setter: setAdults, sub: 'Ages 18 or above' },
                                    ].map(({ label, value, setter, sub }) => (
                                        <div key={label} className="d-flex justify-content-between align-items-center py-2">
                                            <div>
                                                <div className="text-label fw-bold">{label}</div>
                                                {sub && <div className="text-sm  sub-text">{sub}</div>}
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <button
                                                    onClick={() => decrement(setter, value)}
                                                    className="plus-btn"
                                                >
                                                    −
                                                </button>
                                                <span className='fw-bold'>{value}</span>
                                                <button
                                                    onClick={() => increment(setter, value)}
                                                    className="minus-btn"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </ClickAwayListener>
                   
                    <div className="input-group">
                        <button className='submit-btn'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
