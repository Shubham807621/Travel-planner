import React, { useEffect, useState } from 'react'
import './HotelCard.css'
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { getHotelList } from '../../Components/APIServices/apiservice';



export default function HotelCard({selectedCity}) {

const Navigate = useNavigate();
const [hotels, setHotels] = useState([]);

  useEffect(()=>{
    const fetchAllHotels = async ()=>{
         if (!selectedCity) return; //
  
      try {
        const response = await getHotelList(selectedCity);
        console.log(response);
        setHotels(response);
        
      } catch (error) {
          console.error("Error fetching documents:", error);
        }
  
    };
    fetchAllHotels();
  
  },[selectedCity])

    if (!selectedCity) {
    return <div>Loading...</div>;
  }



const handleClick = (id) => {
    Navigate(`/destination/${selectedCity}/hotel-details/${id}`)
}
  return (
    <>
        <div className="hotel-card-wrapper ">
            <div className='d-flex justify-content-between'>
                {hotels.map((hotel)=>(
                <div className="hotel-card" key={hotel.id} onClick={()=> handleClick(hotel.id)}>
                    <div className="hotel-img-wrapper">
                        <img src={hotel.imgUrl} alt="" />
                    </div>
                    <div className="hotel-info">
                        <h4 className="hotel-name">{hotel.name}</h4>
                        <div className="review-box ">
                             <Rating name="half-rating-read" defaultValue={hotel.rating} precision={0.5} readOnly />
                             <p>{hotel.review} Reviews</p>
                        </div>
                        <p className="hotel-description">{hotel.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}
