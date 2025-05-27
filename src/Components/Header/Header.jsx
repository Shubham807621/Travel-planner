import React, { useEffect } from 'react'
import './Header.css'
import ArrowDown from '@mui/icons-material/ArrowDropDownOutlined';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import Favorite from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {

    const [scrolled, setScrolled] = useState(false);
    
    const location = useLocation();
    const hideElement = location.pathname.startsWith("/admin"); 
    const userRole = localStorage.getItem("role");

    const [dropDownMenu1, setDropDownMenu1] = useState(false);


    const handleClick1 = ()=>{
        if(dropDownMenu1){
            
            setDropDownMenu1(false)
        }
        else
        setDropDownMenu1(true)
    }




  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>  
    {!hideElement &&(

        <div className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <h3>Travel Planner</h3>
            </div>
            <div className="nav-bar-menu">
            
                <ul className='p-0 m-0 nav-bar'>
                    <li><Link to='/'>Home       </Link> </li>
                    <li><Link to='/aboutus'>About Us   </Link> </li>
                    <li>
                        <Link to='/destination'>Destinations</Link> 

                    
                        
                    </li>
                    <li><Link to='/contact'>Contact Us </Link> </li>
                    <li>
                        <Link onClick={handleClick1}>Pages<ArrowDown/> </Link> 
                         {dropDownMenu1 && (
                            <div className='dropdown-menu'>
                                <ul className='px-2 m-0'>
                                    <li><Link to='/addMembers' onClick={() => setDropDownMenu1(false)}><h6>Add Members Details </h6></Link></li>
                                    <li></li>
                                    <li>Goa</li>
                                    <li>Kerala</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {userRole === 'Admin' && (
                        <li>
                            <Link to='/admin/dashboard'>Dashboard </Link> 
                        </li>

                    )}
                </ul>
               
            </div>
            <div className="utility-box">
                <div className="search-box ">
                    <input type="text" placeholder='search...'/>
                    <span><SearchIcon/></span>
                </div>
                <div className="favourite-icon mt-1">
                    <Favorite/>
                </div>
                <div className="login-btn">
                    <Link to='/login'>Login</Link>
                </div>

            </div>
        </div>

    )}
    </>
  )
}
