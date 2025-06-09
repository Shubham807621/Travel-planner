import React, { useEffect } from 'react'
import './Header.css'
import Favorite from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
 import user from '../../Images/Users/user.jpg'

export default function Header() {

    const [scrolled, setScrolled] = useState(false);
    
    const location = useLocation();
    const hideElement = location.pathname.startsWith("/admin"); 
    const userRole = localStorage.getItem("role");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate    ();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const employee={

        name:"Shubham Musale",
        email:"shubhammusale111@gmail.com"
    }
  return (
    <>  
    {!hideElement &&(

        <div className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <h3>Travel Planner</h3>
            </div>
            <div className="nav-bar-menu">
            
                <ul className='p-0 m-0 nav-bar'>
                    <li>
                        <Link to='/'>Home </Link> 
                    </li>
                    <li>
                        <Link to='/aboutus'>About Us</Link> 
                    </li>
                    <li>
                        <Link to='/destination'>Destinations</Link>  
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us </Link> 
                    </li>
                    <li>
                        <Link to='/flightbook'>Flight Booking</Link> 
                    </li>
                    {userRole === 'Admin' && (
                        <li>
                            <Link to='/admin/dashboard'>Dashboard </Link> 
                        </li>
                    )}
                </ul>
               
            </div>
            {/* <div className="utility-box">
                <div className="favourite-icon mt-1">
                    <Favorite/>
                </div>
                <div className="login-btn">
                    <Link to='/login'>Login</Link>
                </div>

            </div> */}
                <div className="profile-dropdown">
        
                    <button className="profile-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    <img
                        src={user}
                        alt="User"
                        className="profile-img"
                    />
                    <div className="profile-info">
                        <p className="fw-bold mb-0 d-none d-md-inline">Shubham Musale</p>
                    
                    </div>
                    </button>

                    {menuOpen && (
                    <div className="dropdown-menu show">
                        <div className="user-info">
                            <img src={user}  className="user-img" alt="profile pic"/>
                            <div>
                                <h6 className="mb-0 fw-bold">{employee.name}</h6>
                                <p className="text-muted small mb-0">{employee.email}</p>
                            </div>
                        </div>

                        <Link className="dropdown-item">
                            <AccountCircleOutlinedIcon className="me-2" /> My Profile
                        </Link>
                        <Link className="dropdown-item">
                            <Favorite className="me-2" /> Wishlist
                        </Link>
                        <Link className="dropdown-item">
                            <SettingsOutlinedIcon className="me-2" /> Settings
                        </Link>

                        <button
                            className="dropdown-item text-danger"
                            onClick={() => {
                            localStorage.clear(); // ✅ Clears all stored data (token, empId, etc.)
                            navigate("/login");
                            setMenuOpen(false)
                             // ✅ Redirect to Login page
                            }}
                        >
                            <ExitToAppOutlinedIcon className="me-2" /> Logout
                </button>
                    </div>
                    )}
                </div>
        </div>

    )}
    </>
  )
}
