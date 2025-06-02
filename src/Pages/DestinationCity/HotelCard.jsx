import React, { useEffect, useState } from 'react'
import './HotelCard.css'
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { getHotelList } from '../../Components/APIServices/apiservice';



export default function HotelCard({selectedCity, selectedState}) {

 

    const Navigate = useNavigate();

const Accommodations = [
  {
    id: 1,
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202410281613144642-470942-cb265daa-1393-413d-9f8f-a9da22d17c49.jpg',
    name: 'Shalom Backpackers Jaipur | Rooms & Dorms',
    description: 'Pink City | 970m from Hawa Mahal | 6 minutes walk to Thikana Mandir Sri Govinddevji',
    rating:4,
    review : 6
  },
  {
    id: 2,
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202404121252289607-f473698d-3488-49ec-ae04-24e8f6333f7c.jpg',
    name: 'Sheel Mahal - near Hawa Mahal',
    description: 'Biseswarji | 4 minutes walk to Hawa Mahal',
    rating:4.5,
    review : 5
    
  },
  {
    id: 3,
    image: 'https://r1imghtlak.mmtcdn.com/621d8000256311ee85d30a58a9feac02.jpg',
    name: 'Bloom Boutique - Chelon Haveli, Jaipur',
    description: 'Pink City | 740m from Hawa Mahal | 6 minutes walk to Janatar',
    rating:4.1,
    review : 8
    
  },
];

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
    Navigate(`/destination/${selectedState}/${selectedCity}/hotel-details/${id}`)
}
  return (
    <>
        <div className="hotel-card-wrapper container">
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
