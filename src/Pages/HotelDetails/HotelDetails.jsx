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

    useEffect(() => {
        const fetchHotelDetails = async () => {

            try {
                const response = await getHotelDetails(id);
                setHotel(response);
                setRooms(response.rooms)

            } catch (error) {
                console.error("Error fetching documents:", error);
            }

        };
        fetchHotelDetails();

    }, [id])

    const [formData, setFormData] = useState(() => {
        // Load from localStorage if available
        const stored = localStorage.getItem('bookingDates');
        return stored ? JSON.parse(stored) : {
            checkInDate: '',
            checkoutDate: '',
        };
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const updated = { ...prev, [name]: value };
            localStorage.setItem('bookingDates', JSON.stringify(updated)); // Save to localStorage
            return updated;
        });
    };


    return (

        <div className="hotel-details">
            <div className="hotel-details-top">
                <div className="hotel-details-main">
                    {/* <HotelName hoteldetails={hotel} /> */}
                    <HotelGallery hoteldetails={hotel} />
                    <DetailsSection hoteldetails={hotel} />
                    <HotelFeatures />
                    <GallerySection />
                    <PlanJourney />
                </div>
                <div className="hotel-details-side">
                    <LocationCard hoteldetails={hotel} />
                    
                    <div className="dates">
                        <div className="input-group">
                            <label>Checking Date : </label>
                            <input
                                type="date"
                                name="checkInDate"
                                className="check-date"
                                value={formData.checkInDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Checkout Date : </label>
                            <input
                                type="date"
                                name="checkoutDate"
                                className="check-date"
                                value={formData.checkoutDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                </div>
            </div>
            {/* Room Section */}
            <div className="hotel-details-rooms">
                <RoomOptions roomDetails={rooms} />
            </div>

        </div>
    );
}
