import React from 'react'
import './WhyChoose.css'
import whyImage from '../../Images/why-image-1.svg'
import earth from '../../Images/icon-1.svg'
import money from '../../Images/icon-2.svg'
import location from '../../Images/icon-3.svg'
import booking from '../../Images/icon-4.svg'
import support from '../../Images/icon-5.svg'
import bag from '../../Images/icon-6.svg'


export default function WhyChoose() {
  return (
    <>
    <div className="choose-wrapper">
        
          <h2 className="choose-title">
            Why Choose Travel Planner
          </h2>
          <div className="content-wrapper">
            {/* Left Features */}
            <div className="box-1">
              <div className='content-box'>
                <div className="icon-wrapper">
                    <img src={earth} alt="" />
                </div>
                <h3 className=""> Diverse Destinations</h3>
                <p className="text-gray-600">Richly varied landscapes, luxury accommodation Travel.</p>
              </div>
              <div className='content-box'>
                  <div className="icon-wrapper">
                    <img src={money} alt="" />
                </div>
                <h3 className="">Value for Money</h3>
                <p className="text-gray-600">Richly varied landscapes, luxury accommodation Travel.</p>
              </div>
              <div className='content-box'>
                  <div className="icon-wrapper">
                    <img src={location} alt="" />
                </div>
                <h3 className="">Value for Money</h3>
                <p className="text-gray-600">Richly varied landscapes, luxury accommodation Travel.</p>
              </div>
            </div>
            {/* Middle Image with animation */}
            <div className="box-2">
              <img
                src={whyImage} // Replace with actual image path
                alt="Hikers Illustration"
                className="center-img"
              />
            </div>
            {/* Right Features */}
            <div className="box-3">
              <div className='content-box'>
                  <div className="icon-wrapper">
                    <img src={booking} alt="" />
                </div>
                <h3 className="">Fast Booking</h3>
                <p className="text-gray-600">Richly varied landscapes, luxury accommodation Travel.</p>
              </div>
              <div className='content-box'>
                  <div className="icon-wrapper">
                    <img src={support} alt="" />
                </div>
                <h3 className=""> Support Team</h3>
                <p className="text-gray-600">Richly varied landscapes, luxury accommodation Travel.</p>
              </div>
              <div className='content-box'>
                  <div className="icon-wrapper">
                    <img src={bag} alt="" />
                </div>
                <h3 className=""> Support Team</h3>
                <p className="text-gray-600">Richly varied landscapes, luxury accommodation Travel.</p>
              </div>
            </div>
          </div>
        
    </div>
    
    
    </>
  )
}
