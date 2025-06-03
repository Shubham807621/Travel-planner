import React, { useEffect, useState } from 'react'
import './DestinationCity.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams } from 'react-router-dom';
import HotelCard from './HotelCard';
import { getCityDetails, getPlaceList } from '../../Components/APIServices/apiservice';


export default function DestinationCity() {
  const { state, city } = useParams();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [places , setPlaces] = useState([])
  const [cityDetails ,setCityDetails] = useState();
  const [cityImg, setCityImg] = useState();

  useEffect(() => {
    setSelectedState(state);
    setSelectedCity(city);
  }, [state, city]);


  useEffect(()=>{
      const fetchPlaceList = async ()=>{
           if (!selectedCity) return; //
    
        try {
          const response = await getPlaceList(selectedCity);
          setPlaces(response)
        
          
        } catch (error) {
            console.error("Error fetching documents:", error);
          }
    
      };
      fetchPlaceList();
    
    },[selectedCity])

    
  useEffect(()=>{
      const fetchCityDetails = async ()=>{

           if (!selectedCity) return; //
    
        try {
          const response = await getCityDetails(selectedCity);
         setCityDetails(response);
        setCityImg(`${response.imgUrl}`);
          
        } catch (error) {
            console.error("Error fetching documents:", error);
          }
    
      };
      fetchCityDetails();
    
    },[selectedCity])

    console.log(cityImg)

  return (
    <>
        <div className="destination-city-wrapper">
            <div className="destination-img-wrapper ">
                <div className="image-banner"
                    style={{backgroundImage:`url(${cityImg})`}}
                >
                    <div className="destination-city-content">
                         <h2>{cityDetails?.name}</h2>
                
                    </div>
                </div>
            
            </div>

            <div className="destination-city-info ">
                {/* <h1 className="main-heading mb-4">{selectedCity}</h1> */}
                <p className="main-description ms-2">{cityDetails?.description}</p>
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
