import React from 'react';
import HotelName from './HotelName/HotelName';
import HotelGallery from '../HotelDetails/HotelGallery/HotelGallery';
import DetailsSection from '../HotelDetails/DetailsSection/DetailsSection';
import LocationCard from '../HotelDetails/LocationCard/LocationCard';
import HotelFeatures from '../HotelDetails/HotelFeatures/HotelFeatures';
import GallerySection from '../HotelDetails/GallerySection/GallerySection';
import PlanJourney from '../HotelDetails/PlanJourney/PlanJourney';
import RoomOptions from '../HotelDetails/RoomOptions/RoomOptions';
import './HotelDetails.css';


export default function HotelDetails() {
    return (

        <div className="hotel-details">
            <div className="hotel-details-top">
                <div className="hotel-details-main">
                    <HotelName />
                    <HotelGallery />
                    <DetailsSection />
                    <HotelFeatures />
                    <GallerySection />
                    <PlanJourney />
                </div>
                <div className="hotel-details-side">
                    <LocationCard />
            
                </div>
            </div>
            {/* Room Section */}
            <div className="hotel-details-rooms">
                <RoomOptions />
            </div>

        </div>
    );
}
