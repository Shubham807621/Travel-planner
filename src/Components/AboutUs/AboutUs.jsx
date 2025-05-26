import React, { useState } from 'react';
import './aboutus.css';
import aboutImage from '../../Images/AboutUs/about.svg';
import treker from '../../Images/AboutUs/trekk.jpg';
import GroupIcon from '@mui/icons-material/Group';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
// import 'react-modal-video/css/modal-video.min.css';
// import { FaHandHoldingUsd, FaMapMarkedAlt, FaUserTie } from 'react-icons/fa';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditLocationIcon from '@mui/icons-material/EditLocation';

const AboutUs = () => {
   // const [isOpen, setOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoURL = "https://www.youtube.com/embed/IUN664s7N-c";
  
  const features = [
    {
      icon: <CurrencyRupeeIcon />,
      title: "AFFORDABLE PRICE",
      description: "Explore More, Pay Less."
    },
    {
      icon: <EditLocationIcon />,
      title: "BEST DESTINATION",
      description: "Best Vacation Ever and Blissful Beaches."
    },
    {
      icon: <ManageAccountsIcon />,
      title: "PERSONAL SERVICE",
      description: "Dedicated Support, Every Step and Your Journey, Our Priority."
    },
  ];
  return (
    <div className="aboutus-section">
      <div className="aboutus-image-wrapper">
          <div className="image-banner"></div>
          <div className="aboutus-content">
            <h2>ABOUT US</h2>
            <div className="bread-crumb mt-2">
              <ul className="d-flex">
                <li className="arrow-icon">
                  <span className="me-2"><HomeIcon /></span>
                  <Link to="/">Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
      </div>
      <section className="about-us container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={aboutImage} alt="Hiker" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1 className="heading">World Best Travel Agency</h1>
            <p className="aboutus-description">
              Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives.
              Whether it’s for one day or a two-week vacation, close to home or a foreign land.
            </p>

            <div className="row feature-section my-4">
              <div className="col-6 d-flex align-items-start">
                <GroupIcon className="icon me-2 " />
                <div>
                  <strong>Expert Team for<br />
                    Support
                    </strong>
                  
                </div>
              </div>
              <div className="col-6 d-flex align-items-start border-start ps-3">
                <HeadphonesIcon className="icon me-2" />
                <div>
                  <strong>Urgent Support for<br />
                  Client
                  </strong>
                  
                </div>
              </div>
            </div>

            <blockquote className="blockquote mt-3">
              “HELLO. OUR AGENCY HAS BEEN PRESENT BEST IN THE MARKET”
            </blockquote>
          </div>
        </div>
      </section>

      <div>
        <h2 style={{color:'rgb(41, 37, 37)',textAlign:'center',fontWeight:'bold'}}>Treker is a World Leading Online 
          Tour Booking Platform</h2>
          <h3 style={{color:'rgb(41, 37, 37)',textAlign:'center',fontWeight:'bold',fontStyle:'oblique'}}>Are you ready to travel?</h3>
          <div
          className="video-section"
          style={{
            backgroundImage: `url(${treker})`,
            width: '100%',
            height: '500px',
            backgroundSize: 'cover',
            position: 'relative',
            marginBottom:'10px'
          }}
        >
          
          {/* {!showVideo && (
              <button className="play-button" onClick={() => setShowVideo(true)}>
                ▶
              </button>
          )}

          {showVideo && (
            <div className="iframe-container">
              <button className="close-button" onClick={() => setShowVideo(false)}>
                ✖
              </button>
              <iframe
                width="100%"
                height="470"
                src={`${videoURL}?autoplay=1`}
                title="Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )} */}
        </div>    
      </div>

      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="icon-box">{feature.icon}</div>
            <h4 className='aboutstitle'>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="f-bottom">
          <div className="auto-container">
            <div className="inner clearfix">
              <div className="copyright">
                Copyright &copy; 2022 Travel Planner. All Rights Reserved.
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;