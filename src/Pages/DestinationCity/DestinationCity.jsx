import React, { useEffect, useState } from 'react'
import './DestinationCity.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams } from 'react-router-dom';
import HawaMahal from '../../Images/Jaipur/Hawa Mahal.jpg';
import CityPalaceJaipur from '../../Images/Jaipur/City-Palace1.jpg';
import NahargarhFort from '../../Images/Jaipur/Nahargarh-fort.jpg';
import AmberFort from '../../Images/Jaipur/ambur-fort.jpg';


export default function DestinationCity() {
  const { state, city } = useParams();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setSelectedState(state);
    setSelectedCity(city);
  }, [state, city]);


  const cityDescription = 'The Pink City, famous for its forts and palaces.';

  const [attraction , setAttraction] = useState( [
    {
      id: 1,
      image: HawaMahal,
      name: 'Hawa Mahal',
      description: 'The Palace of Winds, famous for its intricate latticework and pink facade.',
    },
    {
      id: 2,
      image: CityPalaceJaipur,
      name: 'City Palace',
      description: 'A royal residence with stunning architecture and museums.',
    },
    {
      id: 3,
      image: NahargarhFort,
      name: 'Nahargarh Fort',
      description: 'A historic fort offering panoramic views of Jaipur.',
    },
    {
      id: 4,
      image: AmberFort,
      name: 'Amber Fort',
      description: 'A majestic fort known for its artistic Hindu-style elements.',
    },
  ],)

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

            <div className="destination-city-info container ">

                <h1 className="main-heading mb-4">{selectedCity}</h1>
                <p className="main-description ms-2">{cityDescription}</p>
                <div className="destination-box">
                    {attraction.map((attraction) => (
                    <div key={attraction.id} className="destination-card">
                        <div className="image-wrapper">
                            <img
                                src={attraction.image}
                                alt={attraction.name}
                                className={`destination-image `}
                            
                            />
                        </div>
                        <div className="city-info">

                            <h4 className="destination-name">{attraction.name}</h4>
                            <p className="destination-description">{attraction.description}</p>
                        </div>
                    </div>
                    ))}
            
                </div>    
            </div>    
            
        </div>
    
    </>
  )
}
