import React, { useEffect } from 'react';
import HotelName from './HotelName/HotelName';
import HotelGallery from '../HotelDetails/HotelGallery/HotelGallery';
import DetailsSection from '../HotelDetails/DetailsSection/DetailsSection';
import LocationCard from '../HotelDetails/LocationCard/LocationCard';
import HotelFeatures from '../HotelDetails/HotelFeatures/HotelFeatures';
import GallerySection from '../HotelDetails/GallerySection/GallerySection';
import PlanJourney from '../HotelDetails/PlanJourney/PlanJourney';
import RoomOptions from '../HotelDetails/RoomOptions/RoomOptions';
import './HotelDetails.css';
import { useParams } from 'react-router-dom';
import { getHotelDetails } from '../../Components/APIServices/apiservice';
import { useState } from 'react';


export default function HotelDetails() {
 const { id } = useParams();
 console.log(id);

 const [hotel, setHotel] = useState();
 const [rooms, setRooms] = useState([])
  
   useEffect(()=>{
       const fetchHotelDetails = async ()=>{
      
         try {
           const response = await getHotelDetails(id);
           setHotel(response);
            setRooms(response.rooms)
           
         } catch (error) {
             console.error("Error fetching documents:", error);
           }
     
       };
       fetchHotelDetails();
     
     },[id])

    return (

        <div className="hotel-details">
            <div className="hotel-details-top">
                <div className="hotel-details-main">
                    {/* <HotelName hoteldetails={hotel} /> */}
                    <HotelGallery hoteldetails={hotel}/>
                    <DetailsSection hoteldetails={hotel} />
                    <HotelFeatures />
                    <GallerySection />
                    <PlanJourney />
                </div>
                <div className="hotel-details-side">
                    <LocationCard hoteldetails={hotel}/>
            
                </div>
            </div>
            {/* Room Section */}
            <div className="hotel-details-rooms">
                <RoomOptions roomDetails={rooms}/>
            </div>

        </div>
    );
}
