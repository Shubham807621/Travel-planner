import React from 'react'
import './FilterForm.css'

export default function FilterForm() {
  return (
    <>
        <div className="filter-form-wrapper">
            <div className='filter-form'>
                <div className="input-group">
                    <label>Search Destination*</label>
                    <input type="text"  className='input-box' placeholder='Enter Destination...' />
                </div>
                <div className="input-group">
                    <label>Enter People*</label>
                    <input type="text"  className='input-box' placeholder='Enter People...' />
                </div>
                <div className="input-group">
                    <label>Checkin Date*</label>
                    <input type="date" className='input-box'  placeholder='Enter Destination...' />
                </div>
                <div className="input-group">
                    <label>Checkout Date*</label>
                    <input type="date" className='input-box'  placeholder='Enter Destination...' />
                </div>
                <div className="input-group">
                   <button className='submit-btn'>Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}
