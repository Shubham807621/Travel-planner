import React from 'react'
import './Destination.css'
import TrendingDestinations from '../TrendingDestinations/TrendingDestinations'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import TravelPackageList from '../TravelPackageList/TravelPackageList';

export default function Destination() {
  return (
    <>
        <div className="destination-wrapper">
            <div className="destination-img-wrapper ">
                <div className="image-banner">
                    <div className="destination-content">
                        <h2>DESTINATIONS</h2>
                        <div className="bread-crumb mt-2">
                            <ul className='d-flex p-0'>
                                <li className='arrow-icon'>
                                    <span className='me-2'><HomeIcon/></span>
                                    <Link to='/'>Home</Link>
                                </li>
            
                                <li>Destination </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
                <TrendingDestinations/>

                <TravelPackageList/>
        </div>
    
    </>
  )
}
