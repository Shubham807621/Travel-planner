import React, { useEffect, useState } from 'react'
import './DestinationCity.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams } from 'react-router-dom';



export default function DestinationCity() {
  const { state, city } = useParams();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setSelectedState(state);
    setSelectedCity(city);
  }, [state, city]);
  return (
    <>
        <div className="destination-city-wrapper">

             <div className="destination-img-wrapper ">
                <div className="image-banner">
                    <div className="destination-city-content">
                        <h2>{selectedCity}</h2>
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

            
        </div>
    
    </>
  )
}
