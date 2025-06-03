import React, { useEffect, useState } from 'react'
import './DestinationCity.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams } from 'react-router-dom';
import HawaMahal from '../../Images/Jaipur/Hawa Mahal.jpg';
import CityPalaceJaipur from '../../Images/Jaipur/City-Palace1.jpg';
import NahargarhFort from '../../Images/Jaipur/Nahargarh-fort.jpg';
import AmberFort from '../../Images/Jaipur/ambur-fort.jpg';
import HotelCard from './HotelCard';
import { getPlaceList } from '../../Components/APIServices/apiservice';


export default function DestinationCity() {
  const { state, city } = useParams();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [places , setPlaces] = useState([])

  useEffect(() => {
    setSelectedState(state);
    setSelectedCity(city);
  }, [state, city]);


  const cityDescription = 'The Pink City, famous for its forts and palaces.';



  useEffect(()=>{
      const fetchPlaceList = async ()=>{
           if (!selectedCity) return; //
    
        try {
          const response = await getPlaceList(selectedCity);
          console.log(response);
          setPlaces(response)
        
          
        } catch (error) {
            console.error("Error fetching documents:", error);
          }
    
      };
      fetchPlaceList();
    
    },[selectedCity])

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
                    {places.map((place) => (
                    <div key={place.id} className="destination-card">
                        <div className="image-wrapper">
                            <img
                                src={place.imgUrl}
                                alt={place.name}
                                className={`destination-image `}
                            
                            />
                        </div>
                        <div className="city-info">

                            <h4 className="destination-name">{place.name}</h4>
                            <p className="destination-description">{place.description}</p>
                        </div>
                    </div>
                    ))}
            
                </div>    
            </div>    

            <HotelCard selectedCity={selectedCity}/>  
        </div>
    
    </>
  )
}
